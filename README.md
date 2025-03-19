# Sistema de Gestão de Notebooks

Inspiração do projeto.
Haviamos um problema logístico na empresa que trabalhavamos relacionado ao notebooks. Possuíamos 85 notebooks para empréstimo a alunos e muitos desses notebooks tinham que sair para manutenção, o que levou a uma perca de controle pela equipe responsável. Com base nisso, decidi desenvolver um sistema que fosse intuitívo, que as pessoas já estivessem familiarizadas (que não precisasse de um forte treinamento), que fosse que rápida implantação e fosse facilmente migrável de máquina para máquina. Pesquisando um pouco achei a solução, utilizar o Google Sheets integrado ao Google Apps Script.

Descrição do projeto:
Este projeto é um sistema de controle de notebooks destinado a gerenciar as operações de manutenção e empréstimos de equipamentos em um ambiente corporativo. Ele foi desenvolvido para ser usado em uma planilha do Google Sheets, integrando o uso de Google Apps Script para automação das ações de controle de status, movimentação e atualização dos dados dos notebooks, no caso dessa empresa na qual o sistema foi implementado.

## Funcionalidades

### 1. Controle de Manutenção
Gerencia o registro de notebooks enviados para manutenção, incluindo o número de demanda, a descrição do problema e a data de saída. Também permite o registro da data de retorno e a atualização do status para "Concluído" quando a manutenção for finalizada.

### 2. Controle de Empréstimos
Permite registrar a saída de notebooks para empréstimos, associando o equipamento ao destino e a data de saída. Similar à manutenção, o retorno também é registrado, com a atualização do status do equipamento.

### 3. Controle de Status de Notebooks
Acompanhamento contínuo do status de cada notebook, incluindo se está disponível, em manutenção ou emprestado.

## Estrutura da Planilha

As informações são organizadas em três abas no Google Sheets:

- **Notebooks**: Contém dados sobre o número do notebook, patrimônio, modelo, código de barras e status atual.
- **Manutenção**: Registra as demandas de manutenção, o número do notebook, patrimônio, descrição do problema, data de saída, data de retorno e o status da manutenção.
- **Empréstimo**: Controla os empréstimos de notebooks, incluindo o número do notebook, patrimônio, destino, data de saída, data de retorno e status.

## Instalação e Configuração

Para utilizar o sistema:

1. **Importar para o Google Sheets**:
   - Crie uma nova planilha no Google Sheets.
   - Importe o código do Google Apps Script e o HTML da interface para os arquivos adequados.
   - Organize as abas da planilha como "Notebooks", "Manutenção" e "Empréstimo".

2. **Adicionar o Código de Apps Script**:
   - Acesse o editor de scripts do Google Sheets e cole o código do Apps Script fornecido no arquivo.
   - O código cria menus personalizados na interface do usuário e facilita a interação com as abas da planilha.

3. **Configuração da Interface HTML**:
   - O código HTML gera uma interface simples onde o usuário pode registrar a saída de notebooks para manutenção ou empréstimo e também registrar seus retornos.

## Como Usar

- **Saída para Manutenção**: O usuário pode registrar a saída de um notebook para manutenção, incluindo o número da demanda, o número do notebook e a descrição do problema. O status do notebook é atualizado automaticamente para "manutenção".

- **Retorno de Manutenção**: Após a conclusão da manutenção, o status do notebook é atualizado para "disponível" e a data de retorno é registrada.

- **Saída para Empréstimo**: O usuário pode registrar a saída de um notebook para empréstimo, incluindo o destino e a data de saída.

- **Retorno de Empréstimo**: O retorno de um notebook emprestado é registrado, e o status é atualizado para "disponível".

## Desenvolvimento

Se desejar modificar ou adicionar funcionalidades:

- **Google Apps Script**: O script está organizado em funções que gerenciam cada ação do sistema. Você pode adicionar mais funções conforme necessário.
- **Interface HTML**: A interface é simples e pode ser customizada conforme as necessidades do usuário. Você pode alterar o layout ou adicionar campos adicionais para informações específicas.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT). Você pode usar, modificar e distribuir este código com a devida atribuição.
  
