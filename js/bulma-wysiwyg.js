window.onload = function() {
  var elements = document.querySelectorAll('.bulma-wysiwyg-editControls a');
  for (var i = 0; i < elements.length; i++) {
    elements[i].onclick = function() {
      var role = this.getAttribute('data-role');
      switch(role) {
        case 'h1':
        case 'h2':
        case 'p':
          document.execCommand('formatBlock', false, role);
          break;
        default:
          document.execCommand(role, false, null);
          break;
      }
      return false;
    }
  }
};

window.bulma_wysiwyg = function (textarea_selector) {
  var elements = document.querySelectorAll(textarea_selector);
  var editor_id_array = [];
  for (var i = 0; i < elements.length; i++) {
    var editor_div = document.createElement('div');
    var pre_html = elements[i].value;
    var editorid = parseInt(Math.random() * 999999999);
    editor_id_array.push(editorid);
    editor_div.setAttribute('id', 'bulma-wysiwyg-'+editorid);
    editor_div.innerHTML = "\
      <div class='bulma-wysiwyg-editControls' style='text-align:center; padding:5px;'>\
        <span class='is-grouped'>\
          <a class='button' data-role='undo' href='#'><i class='fa fa-fw fa-undo'></i></a>\
          <a class='button' data-role='redo' href='#'><i class='fa fa-fw fa-repeat'></i></a>\
        </span>\
        <span class='is-grouped'>\
          <a class='button' data-role='bold' href='#'><i class='fa fa-fw fa-bold'></i></a>\
          <a class='button' data-role='italic' href='#'><i class='fa fa-fw fa-italic'></i></a>\
          <a class='button' data-role='underline' href='#'><i class='fa fa-fw fa-underline'></i></a>\
          <a class='button' data-role='strikeThrough' href='#'><i class='fa fa-fw fa-strikethrough'></i></a>\
        </span>\
        <span class='is-grouped'>\
          <a class='button' data-role='justifyLeft' href='#'><i class='fa fa-fw fa-align-left'></i></a>\
          <a class='button' data-role='justifyCenter' href='#'><i class='fa fa-fw fa-align-center'></i></a>\
          <a class='button' data-role='justifyRight' href='#'><i class='fa fa-fw fa-align-right'></i></a>\
          <a class='button' data-role='justifyFull' href='#'><i class='fa fa-fw fa-align-justify'></i></a>\
        </span>\
        <span class='is-grouped'>\
          <a class='button' data-role='indent' href='#'><i class='fa fa-fw fa-indent'></i></a>\
          <a class='button' data-role='outdent' href='#'><i class='fa fa-fw fa-outdent'></i></a>\
        </span>\
        <span class='is-grouped'>\
          <a class='button' data-role='insertUnorderedList' href='#'><i class='fa fa-fw fa-list-ul'></i></a>\
          <a class='button' data-role='insertOrderedList' href='#'><i class='fa fa-fw fa-list-ol'></i></a>\
        </span>\
        <span class='is-grouped'>\
          <a class='button' data-role='h1' href='#'>h<sup>1</sup></a>\
          <a class='button' data-role='h2' href='#'>h<sup>2</sup></a>\
          <a class='button' data-role='p' href='#'>p</a>\
        </span>\
        <span class='is-grouped'>\
          <a class='button' data-role='subscript' href='#'><i class='fa fa-fw fa-subscript'></i></a>\
          <a class='button' data-role='superscript' href='#'><i class='fa fa-fw fa-superscript'></i></a>\
        </span>\
      </div>\
      <div id='bulma-wysiwyg-editor-"+editorid+"' class='bulma-wysiwyg-editor' style='' contenteditable>\
        "+pre_html+"\
      </div>";
    elements[i].parentNode.insertBefore(editor_div, elements[i]);
    elements[i].style.display = 'none';
    var element_id = i;
    var updateTextarea = function() {
      elements[element_id].innerHTML = document.getElementById('bulma-wysiwyg-editor-'+editorid).innerHTML;
    };
    document.getElementById('bulma-wysiwyg-editor-'+editorid).onkeyup = updateTextarea;
    document.getElementById('bulma-wysiwyg-'+editorid).onclick = updateTextarea;
  }

  return {
    "destroy": function() {
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = 'block';
      }
      for (var i = 0; i < editor_id_array.length; i++) {
        var el2del = document.getElementById('bulma-wysiwyg-'+editor_id_array[i]);
        el2del.parentNode.removeChild(el2del);
      }
    }
  }
}
