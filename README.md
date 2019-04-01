# Feedback list widget

You can integrate widget to different web pages
Use simple way to setup widget

Put somewhere next code

```
<script src="/path_to_file/feedback_widget.js"></script>
```

Also widget provide a few options

```

<div id="feedbacks"></div>

<script src="/path_to_file/feedback_widget.js" data-container="#feedbacks" data-post-per-page="2"></script>
```

- [data-container] - put string with DOM element selector which render feedback list
- [data-post-per-page] - setting count of post to show

For demo please goto `demo` folder:

In `Basic Website Example.html` you can see example widget integration in some live page
