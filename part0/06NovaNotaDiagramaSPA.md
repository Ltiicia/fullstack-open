```mermaid
sequenceDiagram
    participant Navegador
    participant Servidor

    Note over Navegador: Usuário digita uma nova nota e clica em "Salvar"

    Navegador-->>Navegador: JavaScript intercepta o envio (preventDefault)
    Navegador-->>Navegador: Cria o objeto da nova nota e atualiza a lista localmente (DOM)

    Navegador->>Servidor: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Servidor-->>Navegador: HTTP 201 Created (nota salva com sucesso)

    Note over Navegador: A interface já exibe a nova nota sem recarregar
  ```
1. O usuário insere uma nota e pressiona **Salvar**.  
2. O **JavaScript da SPA** captura o evento e **evita o recarregamento** (`preventDefault`).  
3. O navegador envia uma **única requisição POST** para `/new_note_spa` com o conteúdo da nota.  
4. O servidor responde com **201 Created**, confirmando o sucesso.  
5. O **JavaScript atualiza o DOM** e mostra a nova nota na tela, sem recarregar nada.  