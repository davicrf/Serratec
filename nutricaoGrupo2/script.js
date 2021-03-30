//ARMAZERNAR INFORMAÇÕES

let usuario = [
    {
        nome: "",
        idade: 0,
        peso: 0,
        altura: 0,
        sexo: "",
        emagrecimento: 0,
        imc: 0,
        gebHomem: 0,
        gebMulher: 0,
        caloriaTotal: 0,
        get: 0,
        nivelAtividade: 0,
        diasParaEmagrecer: 0,
    },
];

//TABELA GAF

/*
    var gaf = [
        {
            sedentario: 1.2,
            poucoAtivo: 1.375,
            moderado: 1.55,
            intenso: 1.725,
            muitoIntenso: 1.9
        }
    ];
*/

const gaf = [
    {
        sedentario: 1.15,
        poucoAtivo: 1.45,
        moderado: 1.75,
        intenso: 2.05,
        muitoIntenso: 2.35,
    },
];

//FUNÇÃO PARA CALCULA VALORES

function calcular() {
    // VARIAVEIS -- PEGAR INFORMAÇÕES E VALIDAR

    let nome = prompt("Digite seu nome");

    while (nome == null) {
        nome = prompt("Por favor, digite seu nome");
    }

    /* 
          Parâmetros da função:
          1) "X" --> Valor digitado pelo usuário
          2) "Y" --> Função de conversão para número inteiro ou real
          3) "Z" --> Pergunta que deverá realizar ao usuário.
      */

    let idade = validarNumero(
        parseInt(prompt("Informe sua idade")),
        parseInt,
        "Por favor, informe sua idade"
    );

    let peso = validarNumero(
        parseFloat(prompt("Informe seu peso em kilos(KG)")),
        parseFloat,
        "Por favor, informe seu peso em kilos(KG)"
    );

    let altura = validarNumero(
        parseFloat(prompt("Informe sua altura em metros(m)")),
        parseFloat,
        "Por favor, informe sua altura em metros(m)"
    );

    let emagrecimento = parseFloat(
        prompt("Informe quantos quilos pretende emagrecer: ")
    );

    while (isNaN(emagrecimento)) {
        emagrecimento = parseFloat(
            prompt("Informe quantos quilos pretende emagrecer:")
        );
    }

    function validarNumero(x, y, z) {
        while (isNaN(x)) {
            x = y(prompt(`${z}`));
        }
        return x;
    }

    /* 
          Parâmetros da função:
          1) "X" --> Sexo digitado pelo usuário
          2) "Y" --> Valor booleano para validação
      */

    let sexo = validarSexo(
        prompt(
            'Informe seu sexo: \n Digite "M" para masculino \n Digite "F" para feminino'
        ).toLowerCase(),
        true
    );

    function validarSexo(x, z) {
        while (z) {
            if (x == "m" || x == "f") {
                z = false;
            } else {
                x = prompt(
                    'Por favor, informe seu sexo: \n Digite "M" para masculino \n Digite "F" para feminino'
                ).toLowerCase();
            }
        }
        return x;
    }

    let nivelAtividade = validarNivel(
        parseInt(
            prompt(
                "Digite de 1 a 5 o quão ativo você é, sendo: 1 =  a sendatario e 5 muito ativo"
            )
        ),
        true
    );

    function validarNivel(x, y) {
        while (y) {
            if (!isNaN(x) && x >= 1 && x <= 5) {
                y = false
            } else {
                x = parseInt(prompt("Digite de 1 a 5 o quão ativo você é, sendo: 1 =  a sendatario e 5 muito ativo"))
            }
        }
        return x
    }

    // VARIAVES COM VALOR DOS CALCULOS + CALCULOS E CONDIÇÕES

    let caloriaTotal = 7700 * emagrecimento;
    let imc = peso / (altura * altura);
    let gebHomem = parseInt(66.47 + 13.75 * peso + 5 * altura + 6.76 * idade);
    let gebMulher = parseInt(655.1 + 9.56 * peso + 1.85 * altura + 4.68 * idade);
    let pesoIdeal = 21.75 * altura * altura;
    let get = 0;
    let diasParaEmagrecer = 0;
    let _1KgPorSemana = "";

    // CONDIÇÕES

    if (sexo == "masculino") {
        switch (nivelAtividade) {
            case 1:
                get = gebHomem * gaf[0].sedentario;
                break;
            case 2:
                get = gebHomem * gaf[0].poucoAtivo;
                break;
            case 3:
                get = gebHomem * gaf[0].moderado;
                break;
            case 4:
                get = gebHomem * gaf[0].intenso;
                break;
            case 5:
                get = gebHomem * gaf[0].muitoIntenso;
                break;
        }
    } else {
        switch (nivelAtividade) {
            case 1:
                get = gebMulher * gaf[0].sedentario;
                break;
            case 2:
                get = gebMulher * gaf[0].poucoAtivo;
                break;
            case 3:
                get = gebMulher * gaf[0].moderado;
                break;
            case 4:
                get = gebMulher * gaf[0].intenso;
                break;
            case 5:
                get = gebMulher * gaf[0].muitoIntenso;
                break;
        }
    }

    /* TEMPO PARA PERDER PESO */

    diasParaEmagrecer = caloriaTotal / 1100;

    if (sexo == "masculino") {
        if (get - gebHomem < 1100) {
            _1KgPorSemana =
                "Você terá que fazer mais exercícios para conseguir emagrecer 1kg por semana";
        } else {
            _1KgPorSemana = `
                Ingerindo no máximo ${parseInt(
                get - 1100
            )} Calorias por dia, você conseguira emagrecer 1 kg por semana <br>
                ${parseInt(diasParaEmagrecer)} dias para emagrecer <br>
            `;
        }
    } else {
        if (get - gebMulher < 1100) {
            _1KgPorSemana =
                "Você terá que fazer mais exercícios para conseguir emagrecer 1kg por semana";
        } else {
            _1KgPorSemana = `
                Ingerindo no máximo ${parseInt(
                get - 1100
            )} Calorias por dia, você conseguira emagrecer 1 kg por semana <br>
                ${parseInt(diasParaEmagrecer)} dias para emagrecer <br>
            `;
        }
    }

    // ENVIAR INFORMAÇÕES PARA A ARRAY

    usuario[0].nome = nome;
    usuario[0].idade = idade;
    usuario[0].peso = peso;
    usuario[0].altura = altura;
    usuario[0].sexo = sexo;
    usuario[0].emagrecimento = emagrecimento;
    usuario[0].imc = imc;
    usuario[0].gebHomem = gebHomem;
    usuario[0].gebMulher = gebMulher;
    usuario[0].caloriaTotal = caloriaTotal;
    usuario[0].pesoIdeal = pesoIdeal;
    usuario[0].get = get;
    usuario[0].nivelAtividade = nivelAtividade;
    usuario[0].diasParaEmagrecer = diasParaEmagrecer;

    // MOSTRAR RESPOSTAS

    if (sexo == "m") {
        document.getElementById("resposta").innerHTML = `
                <p>Olá, ${nome}!<br>
                O seu IMC é: ${imc.toFixed(2).replace(".", ",")} <br>
                O seu Peso ideal é: ${pesoIdeal
                .toFixed(2)
                .replace(".", ",")} kg<br>
                O seu GEB é: ${gebHomem.toFixed(0)}<br>
                você terá que gastar ${caloriaTotal} calorias para perder os ${emagrecimento.toFixed(
                    2
                )} kg<br>
                Seu gasto calórico diário é igual a ${parseInt(
                    get
                )} calorias por dia<br>
                ${_1KgPorSemana} <br>
                </p>
            `;
    } else if (sexo == "f") {
        document.getElementById("resposta").innerHTML = `
            <p>Olá, ${nome}!<br>
            O seu IMC é: ${imc.toFixed(2)} <br>
            O seu Peso ideal é: ${pesoIdeal.toFixed(2)} kg<br>
            O seu GEB é: ${gebMulher.toFixed(0)}<br>
            você terá que gastar ${caloriaTotal} calorias para perder os ${emagrecimento.toFixed(
            2
        )} kg<br>
            Seu gasto calórico diário é igual a ${parseInt(
            get
        )} calorias por dia<br>
            ${_1KgPorSemana} <br>
            </p>
        `;
    }
}
