```mermaid
sequenceDiagram
    participant Navegador
    participant Servidor

    Note over Navegador: Usuário acessa a página https://studies.cs.helsinki.fi/exampleapp/spa

    Navegador->>Servidor: GET /spa
    Servidor-->>Navegador: Retorna o HTML da aplicação SPA

    Navegador->>Servidor: GET /main.css
    Servidor-->>Navegador: Retorna o arquivo CSS

    Navegador->>Servidor: GET /spa.js
    Servidor-->>Navegador: Retorna o JavaScript da SPA

    Note over Navegador: O navegador executa spa.js

    Navegador->>Servidor: GET /data.json
    Servidor-->>Navegador: Retorna o JSON com as notas existentes

    Navegador-->>Navegador: Renderiza as notas na tela (sem recarregar)
```

1. O navegador pede o HTML da página SPA.  
2. Baixa o CSS (`main.css`).  
3. Baixa e executa o JS (`spa.js`).  
4. O script solicita os dados das notas (`data.json`).  
5. O navegador renderiza as notas na tela.