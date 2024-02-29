<h1>Aplicação web - Rosticcerie Palestini</h1>

<h2>Como Rodar o Projeto</h2>

<p>Antes de clonar este projeto, certifique-se de ter o Node.js instalado em sua máquina. </p>
<p>A versão do Node.js utilizada neste projeto é a 20.10.0</p>

 <ol>
        <li>
          <h3>Acesse pasta server</h3>
           <pre><code>cd server <br></code></pre>
        </li>
        <li>
            <h3>Instale as Dependências</h3>
            <pre><code> <br>npm install</code></pre>
        </li>
        <li>
            <h3>Em seguida execute o Servidor</h3>
            <pre><code>npm run dev</code></pre>
        </li>
    </ol>

  <h2>Como Rodar a Aplicação Web</h2>
  <ol>
     <li>
          <h3>Acesse pasta web</h3>
           <pre><code>cd web<br></code></pre>
        </li>
        <li>
            <h3>Instale as Dependências</h3>
            <pre><code> <br>npm install</code></pre>
        </li>
       <li>
            <h3>Configurar Variáveis de Ambiente</h3>
            <p>No diretório <code>web</code>, crie um arquivo <code>.env</code> com as variáveis de ambiente necessárias. Você pode copiar o arquivo de exemplo <code>.env.example</code> como modelo para configurar suas variáveis.</p>
        </li>
       <li>
       <h3>Configurando o Gzappy</h3>
        <p>Depois de criar sua conta na Gzappy, acesse o Dashboard, vá até <code>"Meu Perfil"</code> e copie seu <code>"USER TOKEN ID"</code>, cole-o nas suas variáveis no arquivo <code>.env</code> que criou, especificamente em <code>"VITE_USER_TOKEN"</code> entre aspas duplas. Em seguida, vá até <code>"Instância"</code>, logo acima de <code>"Meu Perfil"</code>. Crie uma nova instância com seu WhatsApp. Depois de conectar com seu WhatsApp, você terá dois tokens, <code>"instance_id"</code>. Copie e cole o primeiro em <code>"VITE_INSTANCE_ID"</code> entre aspas duplas. Faça o mesmo para o segundo token, <code>"instance_token"</code>, e cole-o em <code>"VITE_INSTANCE_TOKEN"</code> entre aspas. Na variável <code>"VITE_API_URL"</code>, coloque esta URL: <a href="https://api.gzappy.com/v1/message/send-message"><code>"https://api.gzappy.com/v1/message/send-message"</code></a> entre aspas duplas. Depois disso, vá até o arquivo modelo (model) e procure por <code>"const onSubmit"</code> e <code>"phone"</code>. Coloque seu número de telefone (sem o 9, como: 5532XXXXXXXX) após suas configurações estarem finalizadas. Agora é só iniciar o projeto.</p>
     </li>
   <li>
            <h3>Em seguida execute a Aplicação</h3>
            <pre><code>npm run dev</code></pre>
        </li>
  </ol>

  
  <ol>
    

  </ol>
    
