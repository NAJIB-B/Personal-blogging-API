<h1> Personal blogging API</h1>
<h3>This API let's you do the following:</h3>
<ul>
  <li>Create new blog post</li>
  <li>Update a blog post</li>
  <li>Get all the blog post. With this you can also specify search query to search for specific kind of posts. more details on this in the documentaion</li>
  <li>Get a single post</li>
  <li>Delete a post</li>
</ul>

<h4>Project idea from: <a href="https://roadmap.sh/projects/blogging-platform-api">https://roadmap.sh/projects/blogging-platform-api</a></h4>
<h2>How to run the project</h2>
<p>Clone the project repo</p>
<p><code>git clone https://github.com/NAJIB-B/Personal-blogging-API.git</code></p>

<p>navigate into the project directory</p>
<p><code>cd Personal-blogging-API</code></p>

<p>Install the dependencies</p>
<p><code>npm install</code></p>

<p>Create your own mongodb database (I used <a href="https://www.mongodb.com/products/platform/atlas-database">mongodb atlas</a>)</p>
<p>create your .env file</p>
<p><code>touch .env</code></p>

<p>Create the following variables and fill it up with own details</p>
<p><code>DATABASE="your database connection string"</code></p> <p><code>//in this format "mongodb+srv://&lt;username&gt;:&lt;password&gt;@cluster0.ojffk.mongodb.net/&lt;database name&gt;?retryWrites=true&w=majority&appName=Cluster0"</code></p>

  <i>NOTE: In the example string above the "&lt;password&gt;" should not be changed (meaning username, database name and cluster text should be from your own database.).</i>
  <i>Why the password should remain like that is because it will be taken from the password field below</i>
    
<p><code>DATABASE_PASSWORD="your database password"</code></p>
<p>Run the project</p>
<code>npm start</code>
<i></i>
