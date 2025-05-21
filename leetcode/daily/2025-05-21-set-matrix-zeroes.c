/* Set Matrix Zeroes 
   * Created on 2025-05-21 
   */

#include <stdio.h>
#include <stdlib.h>

void printMatrix(int** matrix, int matrixSize, int* matrixColSize) {
    for (int i = 0; i < matrixSize; i++) {
        for (int j = 0; j < *matrixColSize; j++) {
            printf("%d ", matrix[i][j]);
        }
        printf("\n");
    }
}

void zeraLinha(int **matrix, int matrixColSize, int i) {
    for (int j = 0; j < matrixColSize; j++)
    {
        matrix[i][j] = 0;
    }
}

void zeraColuna(int **matrix, int matrixSize, int j) {
    for (int i = 0; i < matrixSize; i++)
    {
        matrix[i][j] = 0;
    }
    
}


void solution(int** matrix, int matrixSize, int* matrixColSize) {
    int **aux = (int**) malloc(matrixSize * sizeof(int*));
    for (int i = 0; i < matrixSize; i++)
    {
        aux[i] = (int*)calloc(*matrixColSize, sizeof(int));
    }
    printf("Matrix before:\n");
    printMatrix(matrix, matrixSize, matrixColSize);
    for (int i = 0; i < matrixSize; i++)
    {
        for (int j = 0; j < *matrixColSize; j++)
        {
            if (matrix[i][j] == 0) {
                aux[i][j] = 1;
            }
        }
        
    }
    for (int i = 0; i < matrixSize; i++)
    {
        for (int j = 0; j < *matrixColSize; j++)
        {
            if (aux[i][j]) {
                zeraLinha(matrix, *matrixColSize, i);
                zeraColuna(matrix, matrixSize, j);
            }
        }
        
    }
    
    printf("Matrix after:\n");
    printMatrix(aux, matrixSize, matrixColSize);
    printf("Matrix Zerada Linha:\n");
    printMatrix(matrix, matrixSize, matrixColSize);
    for (int i = 0; i < matrixSize; i++)
    {
        free(aux[i]);
    }
    free(aux);
}

int main() {
    int matrixSize = 1;
    int matrixColSize = 2;
    int **matrix = (int**) malloc(matrixSize * sizeof(int*));
    for (int i = 0; i < matrixSize; i++)
    {
        matrix[i] = (int*)malloc(matrixColSize * sizeof(int));
    }
    int tempMatrix[1][2] = {
        {0, 1}
    };
    for (int i = 0; i < matrixSize; i++) {
        for (int j = 0; j < matrixColSize; j++) {
            matrix[i][j] = tempMatrix[i][j];
        }
    }
    solution(matrix, matrixSize, &matrixColSize);
    for (int i = 0; i < matrixSize; i++)
    {
        free(matrix[i]);
    }
    free(matrix);
    return 0;
}
