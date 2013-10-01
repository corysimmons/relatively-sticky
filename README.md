relatively-sticky
=================

A jQuery plugin that will give you that *sticky feeling* without all the headaches involved with `position: fixed`.

### Options

- **speed** milliseconds (default: 0)
- **offset** integer representing how far from the top you want your sticky element to be when it goes into sticky mode (default: 0)
- **pickup** integer or 'auto' representing how far you want to be from the top when you go into sticky mode. Auto will just wait until the top of the viewport bumps into your soon-to-be sticky element (default: 'auto')
- **cssEasing** any default [CSS easing](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function) (default: 'ease')

### Usage

```javascript
$('aside').relativelySticky();
```

or if you want to get fancy

```javascript
$('aside').relativelySticky({
    speed: 400,
    offset: 30,
    pickup: 150,
    cssEasing: 'ease-in-out'
});
```

---

If you like this project be sure to check out my lightweight and completely unique/awesome CSS framework, [Jeet](https://github.com/CorySimmons/jeet/).