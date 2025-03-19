# Sistema de Gestão de Notebooks

Este projeto é um sistema de controle de notebooks destinado a gerenciar as operações de manutenção e empréstimos de equipamentos em um ambiente corporativo. Ele foi desenvolvido para ser usado em uma planilha do Google Sheets, integrando o uso de Google Apps Script para automação das ações de controle de status, movimentação e atualização dos dados dos notebooks.

## Funcionalidades

### Controle de Manutenção
- Gerencia o registro de notebooks enviados para manutenção, incluindo o número de demanda, a descrição do problema e a data de saída.
- Registra a data de retorno e a atualização do status para "Concluído" quando a manutenção for finalizada.

### Controle de Empréstimos
- Permite registrar a saída de notebooks para empréstimos, associando o equipamento ao destino e a data de saída.
- Similar à manutenção, o retorno também é registrado, com a atualização do status do equipamento.

### Controle de Status de Notebooks
- Acompanhamento contínuo do status de cada notebook, incluindo se está disponível, em manutenção ou emprestado.

## Estrutura da Planilha

As informações são organizadas em três abas no Google Sheets:

- **Notebooks**: Contém dados sobre o número do notebook, patrimônio, modelo, código de barras e status atual.
- **Manutenção**: Registra as demandas de manutenção, o número do notebook, patrimônio, descrição do problema, data de saída, data de retorno e o status da manutenção.
- **Empréstimo**: Controla os empréstimos de notebooks, incluindo o número do notebook, patrimônio, destino, data de saída, data de retorno e status.

## Instalação e Configuração

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

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
