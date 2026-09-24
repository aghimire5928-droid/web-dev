"""Banker's Algorithm simulation (safety algorithm) - BSIT 338 Week 4 Lab.

Reads the number of processes, the number of resource types, the Max matrix,
the Allocation matrix and the Available vector, then reports whether the
system is in a safe state. If it is not, the program lists the processes that
can never finish and the resources they are short of.
"""


def read_int(prompt, minimum=1):
    """Keep asking until the user types a whole number >= minimum."""
    while True:
        try:
            value = int(input(prompt))
            if value >= minimum:
                return value
            print(f"  Please enter a whole number >= {minimum}.")
        except ValueError:
            print("  Invalid input. Please enter a whole number.")


def read_vector(prompt, size, upper=None):
    """Read `size` non-negative integers; each must be <= upper[j] if given."""
    while True:
        try:
            values = [int(v) for v in input(prompt).split()]
        except ValueError:
            print("  Invalid input. Use whole numbers separated by spaces.")
            continue
        if len(values) != size or any(v < 0 for v in values):
            print(f"  Enter exactly {size} non-negative integers.")
        elif upper and any(values[j] > upper[j] for j in range(size)):
            print("  Allocation cannot exceed the process's Max claim.")
        else:
            return values


def names(m):
    """Resource labels: A, B, C ... (or R0, R1 ... if more than 26)."""
    return [chr(65 + j) if m <= 26 else f"R{j}" for j in range(m)]


def show_matrix(title, matrix, labels):
    print(f"\n{title}")
    print("      " + "  ".join(f"{r:>3}" for r in labels))
    for i, row in enumerate(matrix):
        print(f"  P{i:<3}" + "  ".join(f"{v:>3}" for v in row))


def is_safe(available, allocation, need):
    """Safety algorithm. Returns (safe, sequence, steps, unfinished, work)."""
    n, m = len(allocation), len(available)
    work = available[:]
    finished = [False] * n
    sequence, steps = [], []

    progress = True
    while progress:
        progress = False
        for i in range(n):
            if not finished[i] and all(need[i][j] <= work[j] for j in range(m)):
                before = work[:]
                work = [work[j] + allocation[i][j] for j in range(m)]
                finished[i] = True
                sequence.append(i)
                steps.append((i, before, work[:]))
                progress = True

    unfinished = [i for i in range(n) if not finished[i]]
    return len(unfinished) == 0, sequence, steps, unfinished, work


def main():
    print("=== Banker's Algorithm: Safe-State Checker ===\n")
    n = read_int("Number of processes: ")
    m = read_int("Number of resource types: ")
    labels = names(m)

    print(f"\nEnter the MAXIMUM demand of each process ({' '.join(labels)}):")
    maximum = [read_vector(f"  Max   P{i}: ", m) for i in range(n)]

    print("\nEnter the CURRENTLY ALLOCATED resources of each process:")
    allocation = [read_vector(f"  Alloc P{i}: ", m, maximum[i]) for i in range(n)]

    prompt = f"\nEnter the AVAILABLE resources ({' '.join(labels)}): "
    available = read_vector(prompt, m)

    need = [[maximum[i][j] - allocation[i][j] for j in range(m)] for i in range(n)]

    show_matrix("Need (Max - Allocation)", need, labels)
    print("\nAvailable: " + "  ".join(f"{r}={v}" for r, v in zip(labels, available)))

    safe, sequence, steps, unfinished, work = is_safe(available, allocation, need)

    print("\n--- Safety check ---")
    for i, before, after in steps:
        print(f"P{i} can finish: Work {before} + Alloc {allocation[i]} -> {after}")

    if safe:
        print("\nRESULT: The system is in a SAFE state.")
        print("Safe sequence: " + " -> ".join(f"P{i}" for i in sequence))
    else:
        print("\nRESULT: The system is in an UNSAFE state.")
        if sequence:
            print("Processes that can finish: " + ", ".join(f"P{i}" for i in sequence))
        print("Processes that cannot finish (cause of the unsafe state): "
              + ", ".join(f"P{i}" for i in unfinished))
        print(f"Work available when the search got stuck: {work}")
        for i in unfinished:
            short = [f"{labels[j]} (needs {need[i][j]}, only {work[j]} free)"
                     for j in range(m) if need[i][j] > work[j]]
            print(f"  P{i} is short of: " + ", ".join(short))


if __name__ == "__main__":
    main()