LazyTemplates
=============

Lazy load html from a template when positioned into view.


To LazyLoad content in just wrap the markup in <script type="text/html" class="lazy" > Markup here... </script>

When the content comes into the viewport it will automatically be loaded into the dom.

Data Options
=============

Lazy Templates comes with the option to set a width and height on the placeholder element. As well as specify a callback to be fired after the template is loaded into the dom...

**TODO**: Ajax Loading

Usage example: 

    `<script type="text/html" data-width="200" data-height="200" data-callback="bang" class="lazy">
                        <h1>I'm serious as a heart attack</h1>
                        <p>Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass. </p>
    </script>`

<table>
  <tbody>
    <tr>
      <th>option</th>
      <th>description</th>
    </tr>
    <tr>
      <td>width</td>
      <td>sets the width for the placeholder element, which will take up space in the document.</td>
    </tr>
    <tr>
      <td>height</td>
      <td>sets the height for the placeholder element, which will take up space in the document.</td>
    </tr>
    <tr>
      <td>callback</td>
      <td>sets the callback function that will be fired after the template is loaded into the DOM.</td>
    </tr>
  </tbody>
</table>
