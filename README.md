# bulma-wysiwyg
WYSIWYG editor based on Bulma.

This is a **work in progress**.

## Usage

Include Bulma, FontAwesome and bulma-wysiwyg:

```
<head>
    <!-- bulma -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.0/css/bulma.min.css">

    <!-- fontawesome -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

    <!-- bulma-wysiwyg -->
    <link rel="stylesheet" href="https://cdn.rawgit.com/jesobreira/bulma-wysiwyg/dde4eb0e/css/bulma-wysiwyg.css">

</head>
```

Create your textarea:

```
<body>
  <textarea id="editor"><textarea>
```

Include Bulma Javascript file (**jQuery is NOT required**) and initiate the editor:

```
<script src="https://cdn.rawgit.com/jesobreira/bulma-wysiwyg/dde4eb0e/js/bulma-wysiwyg.js"></script>
<script>
  var editor = bulma_wysiwyg('#editor');
</script>
</body>
```

The editor contents get saved in real time to your textarea as HTML (encoded). This way you will not have problems with form submit. To get the editor contents, just get your textarea contents (`document.getElementById('editor').innerHTML`).

If needed, here's how to disable bulma-wysiwyg and get back your textarea:

```
editor.destroy();
```
