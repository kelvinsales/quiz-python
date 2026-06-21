// Banco de questões parametrizadas
// Cada questão pode ter valores dinâmicos gerados na hora

const QUESTOES = {

  sequencial: [

    {
      id: "seq01",
      tipo: "completar",
      parametros: () => {
        const preco = [2.50, 3.00, 4.50, 5.00, 1.50][Math.floor(Math.random()*5)];
        const qtd   = [3, 4, 5, 6, 8][Math.floor(Math.random()*5)];
        return { preco, qtd, total: (preco * qtd).toFixed(2) };
      },
      gerar: (p) => ({
        enunciado: `Uma padaria vende pão a R$ ${p.preco.toFixed(2)} a unidade. O cliente informa quantos pães quer comprar e o programa mostra o valor total a pagar.`,
        pergunta: "Complete o código para calcular o total corretamente:",
        codigo: `preco = ${p.preco.toFixed(2)}\nquantidade = int(input("Quantidade de pães: "))\n\ntotal = preco * ___\n\nprint("Total: R$", total)`,
        lacuna: "___",
        alternativas: ["preco", "quantidade", "total", "desconto"],
        correta: 1,
        gabarito: `O enunciado diz que o total é o preço multiplicado pela quantidade. A resposta é <code>quantidade</code> — que é o valor digitado pelo cliente.`
      })
    },

    {
      id: "seq02",
      tipo: "erro",
      parametros: () => {
        const p1 = [6.0, 7.0, 8.5, 5.5][Math.floor(Math.random()*4)];
        const p2 = [7.0, 8.0, 6.5, 9.0][Math.floor(Math.random()*4)];
        return { p1, p2, media: ((p1+p2)/2).toFixed(1) };
      },
      gerar: (p) => ({
        enunciado: `Um programa deve ler duas notas de um aluno digitadas pelo teclado e calcular a média entre elas.`,
        pergunta: "O código abaixo tem um erro. Qual é o problema?",
        codigo: `n1 = input("Nota 1: ")\nn2 = input("Nota 2: ")\n\nmedia = (n1 + n2) / 2\nprint("Média:", media)`,
        alternativas: [
          "A fórmula da média está errada",
          "Falta o print das notas antes da média",
          "n1 e n2 não foram convertidas para número com float()",
          "Não é possível dividir por 2 em Python"
        ],
        correta: 2,
        gabarito: `<code>input()</code> sempre retorna texto. Sem <code>float()</code>, Python não consegue fazer a divisão — causaria um erro de tipo.`
      })
    },

    {
      id: "seq03",
      tipo: "completar",
      parametros: () => {
        const vel = [60, 80, 90, 100, 120][Math.floor(Math.random()*5)];
        const tempo = [2, 3, 4, 5][Math.floor(Math.random()*4)];
        return { vel, tempo, dist: vel * tempo };
      },
      gerar: (p) => ({
        enunciado: `Um motorista viajou a ${p.vel} km/h durante ${p.tempo} horas. O programa deve calcular a distância total percorrida.`,
        pergunta: "O que deve substituir ___ para o programa funcionar?",
        codigo: `velocidade = ${p.vel}\ntempo = ${p.tempo}\n\ndistancia = ___\n\nprint("Distância percorrida:", distancia, "km")`,
        lacuna: "___",
        alternativas: [
          "velocidade + tempo",
          "velocidade / tempo",
          "velocidade - tempo",
          "velocidade * tempo"
        ],
        correta: 3,
        gabarito: `O enunciado diz que distância = velocidade × tempo. O processamento correto é <code>velocidade * tempo</code>.`
      })
    },

    {
      id: "seq04",
      tipo: "identificar",
      parametros: () => {
        const salario = [1500, 2000, 2500, 3000][Math.floor(Math.random()*4)];
        const bonus = [0.10, 0.15, 0.20][Math.floor(Math.random()*3)];
        return { salario, bonus, pct: (bonus*100).toFixed(0), resultado: (salario*bonus).toFixed(2) };
      },
      gerar: (p) => ({
        enunciado: `Uma empresa quer calcular o bônus de ${p.pct}% sobre o salário de um funcionário, que é digitado pelo usuário.`,
        pergunta: "Qual é a saída esperada desse programa?",
        codigo: `salario = float(input("Salário: "))\nbonus = salario * ${p.bonus}\nprint("Bônus:", bonus)`,
        alternativas: [
          `O valor do salário digitado`,
          `${p.pct}% do salário digitado`,
          `O salário somado ao bônus`,
          `O nome do funcionário`
        ],
        correta: 1,
        gabarito: `O enunciado pede apenas o bônus — que é ${p.pct}% do salário. O <code>print</code> mostra somente o valor de <code>bonus</code>, não o salário inteiro.`
      })
    },

    {
      id: "seq05",
      tipo: "erro",
      parametros: () => {
        const base = [4, 5, 6, 8][Math.floor(Math.random()*4)];
        const alt  = [3, 4, 5, 6][Math.floor(Math.random()*4)];
        return { base, alt, area: (base*alt/2).toFixed(1) };
      },
      gerar: (p) => ({
        enunciado: `Um programa deve calcular a área de um triângulo. O usuário digita a base e a altura, e o programa mostra a área.`,
        pergunta: "O código abaixo está errado. Qual é o problema?",
        codigo: `base = float(input("Base: "))\naltura = float(input("Altura: "))\n\narea = base * altura\nprint("Área:", area)`,
        alternativas: [
          "float() não funciona com input()",
          "O print está escrevendo o nome errado da variável",
          "Falta dividir por 2 na fórmula da área do triângulo",
          "A variável altura não pode ter esse nome"
        ],
        correta: 2,
        gabarito: `A fórmula da área do triângulo é base × altura ÷ 2. O código calcula apenas base × altura — falta o <code>/ 2</code> no processamento.`
      })
    },

    {
      id: "seq06",
      tipo: "identificar",
      parametros: () => {
        const litros = [30, 40, 50, 60][Math.floor(Math.random()*4)];
        const preco  = [5.50, 5.89, 6.10, 5.79][Math.floor(Math.random()*4)];
        return { litros, preco, total: (litros*preco).toFixed(2) };
      },
      gerar: (p) => ({
        enunciado: `Um posto de combustível quer um programa que leia a quantidade de litros abastecidos e o preço por litro, e calcule o valor total a pagar.`,
        pergunta: "Quais são as entradas de dados desse problema?",
        codigo: `litros = float(input("Litros abastecidos: "))\npreco = float(input("Preço por litro: "))\n\ntotal = litros * preco\nprint("Total: R$", total)`,
        alternativas: [
          "Apenas o total a pagar",
          "Litros abastecidos e preço por litro",
          "Apenas os litros abastecidos",
          "O total e o preço por litro"
        ],
        correta: 1,
        gabarito: `O enunciado diz que o programa deve <em>ler</em> a quantidade de litros e o preço. Esses são os dados de entrada — o total é calculado pelo programa (saída).`
      })
    },

    {
      id: "seq07",
      tipo: "completar",
      parametros: () => {
        const temp = [36, 37, 38, 39, 40][Math.floor(Math.random()*5)];
        const conv = ((temp - 32) * 5 / 9).toFixed(1);
        return { temp, conv };
      },
      gerar: (p) => ({
        enunciado: `Um programa deve converter uma temperatura digitada em Fahrenheit para Celsius. A fórmula é: Celsius = (Fahrenheit - 32) × 5 / 9.`,
        pergunta: "Complete o cálculo da conversão:",
        codigo: `fahrenheit = float(input("Temperatura em Fahrenheit: "))\n\ncelsius = ___\n\nprint("Temperatura em Celsius:", celsius)`,
        lacuna: "___",
        alternativas: [
          "fahrenheit * 5 / 9",
          "(fahrenheit - 32) * 5 / 9",
          "(fahrenheit + 32) / 5 * 9",
          "fahrenheit - 32 * 5 / 9"
        ],
        correta: 1,
        gabarito: `A fórmula do enunciado é (Fahrenheit - 32) × 5 / 9. Os parênteses são obrigatórios — sem eles, a subtração acontece depois da multiplicação.`
      })
    },

  ],

  condicional: [

    {
      id: "cond01",
      tipo: "completar",
      parametros: () => {
        const min = [5.0, 6.0, 7.0][Math.floor(Math.random()*3)];
        return { min };
      },
      gerar: (p) => ({
        enunciado: `Uma escola considera aprovado o aluno que tirar média maior ou igual a ${p.min}. O programa lê a média e exibe "Aprovado" ou "Reprovado".`,
        pergunta: "Complete a condição corretamente:",
        codigo: `media = float(input("Média: "))\n\nif media ___ ${p.min}:\n    print("Aprovado")\nelse:\n    print("Reprovado")`,
        lacuna: "___",
        alternativas: ["==", ">", ">=", "<="],
        correta: 2,
        gabarito: `O enunciado diz "maior ou igual a ${p.min}", então o operador correto é <code>>=</code>. Usar apenas <code>></code> excluiria quem tirou exatamente ${p.min}.`
      })
    },

    {
      id: "cond02",
      tipo: "erro",
      parametros: () => {
        const limite = [18, 16, 21][Math.floor(Math.random()*3)];
        return { limite };
      },
      gerar: (p) => ({
        enunciado: `Um sistema deve verificar se uma pessoa tem ${p.limite} anos ou mais para liberar o acesso. A idade é digitada pelo usuário.`,
        pergunta: "O código abaixo tem um erro. Qual é o problema?",
        codigo: `idade = input("Digite sua idade: ")\n\nif idade >= ${p.limite}:\n    print("Acesso liberado")\nelse:\n    print("Acesso negado")`,
        alternativas: [
          `O número ${p.limite} deveria estar entre aspas`,
          `idade não foi convertida para número com int()`,
          `O operador >= está errado, deveria ser ==`,
          `Falta um elif entre o if e o else`
        ],
        correta: 1,
        gabarito: `<code>input()</code> retorna texto. Comparar texto com número causa erro em Python. É preciso converter com <code>int(idade)</code> ou usar <code>int(input(...))</code>.`
      })
    },

    {
      id: "cond03",
      tipo: "identificar",
      parametros: () => {
        const desc = [10, 15, 20][Math.floor(Math.random()*3)];
        const min  = [100, 150, 200][Math.floor(Math.random()*3)];
        return { desc, min };
      },
      gerar: (p) => ({
        enunciado: `Uma loja dá ${p.desc}% de desconto para compras acima de R$ ${p.min}. O programa lê o valor da compra e mostra o desconto, se houver.`,
        pergunta: "Qual é o processamento desse problema?",
        codigo: `valor = float(input("Valor da compra: "))\n\nif valor > ${p.min}:\n    desconto = valor * ${p.desc/100}\n    print("Desconto: R$", desconto)\nelse:\n    print("Sem desconto")`,
        alternativas: [
          "Ler o valor da compra",
          `Calcular ${p.desc}% do valor, apenas se o valor for maior que R$ ${p.min}`,
          "Mostrar o desconto na tela",
          `Verificar se o valor é igual a R$ ${p.min}`
        ],
        correta: 1,
        gabarito: `O processamento é o cálculo do desconto — mas só acontece quando a condição é verdadeira. A leitura é entrada e o print é saída.`
      })
    },

    {
      id: "cond04",
      tipo: "completar",
      parametros: () => {
        const ref  = [0, 10, 20][Math.floor(Math.random()*3)];
        return { ref };
      },
      gerar: (p) => ({
        enunciado: `Um termômetro digital deve informar se a temperatura está abaixo de ${p.ref}°C (frio), igual a ${p.ref}°C (neutro) ou acima de ${p.ref}°C (quente).`,
        pergunta: "Complete o trecho que falta no código:",
        codigo: `temp = float(input("Temperatura: "))\n\nif temp < ${p.ref}:\n    print("Frio")\n___ temp == ${p.ref}:\n    print("Neutro")\nelse:\n    print("Quente")`,
        lacuna: "___",
        alternativas: ["if", "else", "elif", "and"],
        correta: 2,
        gabarito: `Quando há mais de duas situações possíveis, usamos <code>elif</code> para testar a segunda condição antes de ir ao <code>else</code>.`
      })
    },

    {
      id: "cond05",
      tipo: "identificar",
      parametros: () => {
        const taxa = [0.05, 0.08, 0.10][Math.floor(Math.random()*3)];
        const lim  = [500, 1000, 1500][Math.floor(Math.random()*3)];
        return { taxa, pct: (taxa*100).toFixed(0), lim };
      },
      gerar: (p) => ({
        enunciado: `Um banco cobra taxa de ${p.pct}% sobre saques acima de R$ ${p.lim}. O programa lê o valor do saque e informa se há cobrança de taxa.`,
        pergunta: "Onde a condicional atua nesse problema?",
        codigo: `saque = float(input("Valor do saque: "))\n\nif saque > ${p.lim}:\n    taxa = saque * ${p.taxa}\n    print("Taxa cobrada: R$", taxa)\nelse:\n    print("Sem taxa")`,
        alternativas: [
          "Na entrada — decide o que o usuário digita",
          "Na saída — decide o que será impresso na tela",
          "No processamento — decide se o cálculo da taxa acontece ou não",
          "Em todos os lugares ao mesmo tempo"
        ],
        correta: 2,
        gabarito: `A condicional age no processamento: o cálculo da taxa só acontece se o saque for maior que R$ ${p.lim}. A entrada e a saída existem independente da condição.`
      })
    },

    {
      id: "cond06",
      tipo: "erro",
      parametros: () => {
        const n1 = [5, 8, 10, 15][Math.floor(Math.random()*4)];
        const n2 = [3, 6, 12, 20][Math.floor(Math.random()*4)];
        return { n1, n2 };
      },
      gerar: (p) => ({
        enunciado: `Um programa deve ler dois números e informar qual é o maior entre eles.`,
        pergunta: "O código abaixo tem um erro lógico. Qual é o problema?",
        codigo: `a = float(input("Primeiro número: "))\nb = float(input("Segundo número: "))\n\nif a > b:\n    print("O maior é:", b)\nelse:\n    print("O maior é:", a)`,
        alternativas: [
          "float() não deveria ser usado aqui",
          "O operador > está invertido, deveria ser <",
          "As mensagens estão trocadas: quando a > b, deveria imprimir a, não b",
          "Falta um elif para quando os números são iguais"
        ],
        correta: 2,
        gabarito: `Quando <code>a > b</code> é verdadeiro, o maior é <code>a</code> — mas o código imprime <code>b</code>. As variáveis nos prints estão trocadas.`
      })
    },

  ],

  laco: [

    {
      id: "laco01",
      tipo: "completar",
      parametros: () => {
        const n = [3, 4, 5][Math.floor(Math.random()*3)];
        return { n };
      },
      gerar: (p) => ({
        enunciado: `Um professor quer um programa que leia as notas de ${p.n} alunos uma a uma e mostre cada nota na tela.`,
        pergunta: "Complete o código para que o laço repita ${p.n} vezes:",
        codigo: `for i in range(___):\n    nota = float(input("Nota do aluno " + str(i+1) + ": "))\n    print("Nota:", nota)`,
        lacuna: "___",
        alternativas: [`${p.n - 1}`, `${p.n}`, `${p.n + 1}`, "i"],
        correta: 1,
        gabarito: `<code>range(${p.n})</code> gera ${p.n} repetições (de 0 a ${p.n-1}). O enunciado pede exatamente ${p.n} alunos.`
      })
    },

    {
      id: "laco02",
      tipo: "identificar",
      parametros: () => {
        const n = [3, 5, 10][Math.floor(Math.random()*3)];
        return { n };
      },
      gerar: (p) => ({
        enunciado: `Um programa deve calcular a soma de ${p.n} números digitados pelo usuário e mostrar o resultado ao final.`,
        pergunta: "Qual é a saída desse programa?",
        codigo: `soma = 0\n\nfor i in range(${p.n}):\n    numero = float(input("Digite um número: "))\n    soma = soma + numero\n\nprint("Soma total:", soma)`,
        alternativas: [
          `Os ${p.n} números digitados`,
          "Cada número logo após ser digitado",
          "A soma de todos os números, mostrada uma única vez ao final",
          `O número ${p.n}`
        ],
        correta: 2,
        gabarito: `O <code>print</code> está fora do laço — executa apenas uma vez, depois de todos os números terem sido somados. A saída é a soma total.`
      })
    },

  ]

};
