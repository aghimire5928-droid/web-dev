body {
  margin: 0;
  height: 100vh;
  background-color: pink;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("images/2.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.container {
  width: 300px;
  height: 300px;
  border: 1px solid #333;
  position: relative;
  background-color: aqua;
  background-image: url("images/1.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.box {
  width: 50px;
  height: 50px;
  background-color: blueviolet;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform 1s ease, background-color 1s ease;
  background-image: url("images/5.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.box:hover {
  background-color: blue;
  transform: translate(-50%, -50%) scale(1.2) rotate(15deg);
  cursor: pointer;
}

@media (min-width: 768px) {
  .container {
    width: 300px;
    height: 300px;
    border: 1px solid #333;
  }
  .box {
    width: 75px;
    height: 75px;
  }
}