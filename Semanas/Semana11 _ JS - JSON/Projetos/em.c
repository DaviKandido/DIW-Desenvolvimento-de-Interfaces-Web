#include <stdio.h>

    #include <stdio.h>
    int acelerador(int distancia) {
    // Retira distancia do emissor ao acalerador (3) Unidades
    distancia = distancia - 3;
    // Retira a quantidades de voltas dadas
    distancia = distancia % 8;

    // Verifica a distancia necessaria até cada sensor
    // Retorna sensor Atingido
    if (distancia == 3) {
        return 1;
    } else if (distancia == 4) {
        return 2;
    } else if (distancia == 5) {
        return 3;
    } else {
        return 0;
    }
    }
    int main(void) {
    // definição de variáveis
    int distancia = 0;
    int resultado = 0;
    // Entrada de dados
    printf("\nDigite a distancia percorrida pela particula: ");
    scanf("%d", &distancia);
    // Chamada de função/inclusão de retorno em variavel
    if (distancia >= 6 && distancia <= 800008)
        resultado = acelerador(distancia);
        else
        printf("\nDistancia invalida: ");

    // Teste de retorno de função
    if (resultado == 1 || resultado == 2 || resultado == 3) {
        printf("\nA particula atingiu o sensor [%d]", resultado);
    } else {
        printf("\nA particula nao atingiu nenhum sensor");
    }
    return 0;
    }