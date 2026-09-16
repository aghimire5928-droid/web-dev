#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>

typedef struct {
    int num1;
    int num2;
} ThreadData;

void *get_input(void *arg)
{
    ThreadData *data = (ThreadData *)arg;
    int a, b;

    do {
        printf("Enter first positive integer (1-50): ");
        scanf("%d", &a);
    } while (a <= 0 || a > 50);

    do {
        printf("Enter second positive integer (1-50): ");
        scanf("%d", &b);
    } while (b <= 0 || b > 50);

    data->num1 = a;
    data->num2 = b;

    return NULL;
}

int main()
{
    pthread_t tid;
    ThreadData data;

    if (pthread_create(&tid, NULL, get_input, &data) != 0)
    {
        perror("Thread creation failed");
        return 1;
    }

    pthread_join(tid, NULL);

    int low  = (data.num1 < data.num2) ? data.num1 : data.num2;
    int high = (data.num1 < data.num2) ? data.num2 : data.num1;

    printf("\nMain process: Integers between %d and %d are:\n", data.num1, data.num2);
    for (int i = low; i <= high; i++)
    {
        printf("%d ", i);
    }
    printf("\n");

    return 0;
}