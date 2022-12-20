// Создать класс "Матрица". Класс должен иметь следующие переменные:
// двумерный массив вещественных чисел; количество строк и столбцов в матрице.
// Класс должен иметь следующие методы: сложение с другой матрицей; умножение на
// число; вывод на печать; умножение матриц - по желанию.

class Matrix {
  matrix;
  #lengthX;
  #lengthY;
  constructor({ lengthX, lengthY }) {
    this.matrix = [];
    for (let i = 0; i < lengthY; i += 1) {
      const arr = [];
      arr.length = lengthX;
      this.matrix.push(arr);
    }

    this.#lengthX = lengthX;
    this.#lengthY = lengthY;
  }

  fill(value) {
    for (let y = 0; y < this.#lengthY; y += 1) {
      for (let x = 0; x < this.#lengthX; x += 1) {
        this.matrix[y][x] = value;
      }
    }
    console.log(this.matrix);
  }

  showMatrix() {
    let result = '';
    for (let y = 0; y < this.#lengthY; y += 1) {
      let string = this.matrix[y].join('');
      result += string + '\n';
    }
    console.log(result);
  }
}
const matrix = new Matrix({ lengthX: 10, lengthY: 10 });
matrix.fill(1);

matrix.showMatrix();
