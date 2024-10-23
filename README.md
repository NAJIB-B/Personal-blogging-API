<h1 align="center"> Personal blogging API</h1>

# Overview
![project architecture](https://assets.roadmap.sh/guest/blogging-platform-api.png)  

  
This is a RESTful API that powers a personal blog. It has the following features:

- Return a list of articles. You can add filters for tags or a particular search term.
- Return a single article, specified by the ID of the article.
- Create a new article to be published.
- Delete a single article, specified by the ID.
- Update a single article, again, you’d specify the article using its ID.

<h4>Project idea from: <a href="https://roadmap.sh/projects/personal-blog">https://roadmap.sh/projects/personal-blog</a></h4>
<br></br>
<h2>How to Run the Project</h2>

<ol>
  <li><strong>Clone the project repo</strong></li>
  <pre><code>git clone https://github.com/NAJIB-B/Personal-blogging-API.git</code></pre>

  <li><strong>Navigate into the project directory</strong></li>
  <pre><code>cd Personal-blogging-API</code></pre>

  <li><strong>Install the dependencies</strong></li>
  <pre><code>npm install</code></pre>

  <li><strong>Create your own MongoDB database</strong></li>
  <p>(I used MongoDB Atlas)</p>

  <li><strong>Create your <code>.env</code> file</strong></li>
  <pre><code>touch .env</code></pre>

  <li><strong>Add the following environment variables</strong></li>
  <p>Populate the <code>.env</code> file with the following variables, replacing the placeholders with your own details:</p>

  <pre><code>DATABASE="mongodb+srv://&lt;username&gt;:&lt;password&gt;@cluster0.mongodb.net/&lt;database-name&gt;?retryWrites=true&amp;w=majority&amp;appName=Cluster0"
DATABASE_PASSWORD="your-database-password"</code></pre>

  <p><strong>Note:</strong></p>
  <ul>
    <li>Replace <code>&lt;username&gt;</code>, <code>&lt;database-name&gt;</code>, and other placeholders with the relevant details from your own MongoDB database.</li>
    <li><strong>Do not replace</strong> the <code>&lt;password&gt;</code> placeholder in the connection string. It will be automatically substituted with the <code>DATABASE_PASSWORD</code> value you define.</li>
  </ul>

  <li><strong>Run the project</strong></li>
  <pre><code>npm start</code></pre>
</ol>

