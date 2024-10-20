### How should I name Vue components?

[Basic style guide](https://v3.ru.vuejs.org/style-guide/) <br>
Special rules for the project:

* UiComponentName.vue - These components are entirely simple and cannot use the application environment, such as Vuex, emitter, etc.
* TheComponentName.vue - This component can exist as a single instance on the page and can fully utilize the application environment. It should be as isolated as possible from the parent component whenever possible.
* ViewPageName.vue - This component is a page, can utilize the entire application environment and can initialize server requests.
* PageNameComponentName.vue - This component is a child component of a page, can utilize the application environment, and cannot be used outside the context of the page!
* LayoutComponentName.vue - This component is a layout, can utilize the entire application environment and can initialize server requests.

### How should I work TS/JS components?
[Basic](https://basarat.gitbook.io/typescript/styleguide) <br>
[Full](https://ts.dev/style/#ts-ignore)

### How should I work SCSS/CSS/HTML components/templates?
[Full](https://codeguide.academy/html-css.html)

### Project Folder Structure and Their Purpose (src)

- **Layouts**: This folder contains layout components. These components define the structure of the application.
- **Views**: This folder contains page components. You can refer to [this guide](https://nuxt.com/docs/getting-started/routing) on how to organize files within this folder.
- **Router**: This folder contains the Vue Router and its configurations. More details can be found [here](https://router.vuejs.org/).
- **Assets**: This folder holds external files that can be used independently, such as libraries (`/assets/libs`), global styles and mixins (`/assets/style`), images (`/assets/img`), and more.
- **Components**: This folder contains all the components. It is important to organize components into subcategories such as `/ui/Component.vue`, `/page/name/PageNameComponentName.vue`. Components prefixed with "The" should be stored at the root of this folder.
- **Store**: Place for storing Pinia files.  