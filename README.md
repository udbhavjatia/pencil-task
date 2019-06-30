# pencil-task
Interview Task for Pencil

<h2>Interview Task</h2>
<ul>
  <li>Build a frontend where a user can load an image and preview it on a fabric.js canvas</li>
  <li>Build an upload button that would allow the user to persist the image to a file system via a Node.js backend</li>
</ul>

<h3>Frameworks used-</h3>
<ul>
  <li>Boostrap 4 (Front-End)</li>
  <li>fabric.js</li>
  <li>Node.js</li>
</ul>

<h3>How this works-</h3>
<ul>
  <li>Clicking <b>Browse</b> will allow the user to load an image and have it displayed on a fabric.js canvas</li>
  <li>Clicking <b>Upload</b> will persist the image to the file system (/public/uploads) via a Node.js backend</li>
  <li>If the user loads multiple images, only the latest image will be saved to the file system</li>
</ul>

<h3>Error Handling-</h3>
<ul>
  <li>User is only allowed to preview and upload image files (.png, .jpeg, .jpg)</li>
  <li>User has to select a file for the <b>Upload</b> button to function</li>
  <li>User will be able to upload multiple files with the same name as each one is saved with its own unique timestamp</li>
  <li>User will encounter a 404 page if they navigate away from the homepage</li>
</ul>

<h3>Potential Enhancements-</h3>
<ul>
  <li>Ability to display multiple images on the fabric.js canvas and upload them together</li>
  <li>'Drag and Drop' feature to preview and upload images</li>
  <li>Deployment on Amazon S3 for reliable and persistent file storage</li>
</ul>

<h4>Purpose of JS Files</h4>
<ol>
  <li><b>fileInput.js:</b> To display the file name in the input box after the user loads a file as Boostrap 4 does not have this native feature built in.</li>
  <li><b>init.js:</b> To preview the image on a fabric.js canvas after the user loads it.</li>
</ol>
