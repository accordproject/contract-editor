This is a React component for a rich text contract editor. It is based on the @accordproject/markdown-editor component.

This component is Apache-2 licensed Open Source. Contributors welcome!

### Demo

https://accordproject-contract-editor.netlify.com/examples/

### Usage

```
npm install @accordproject/contract-editor
```

```
import { ContractEditor } from '@accordproject/contract-editor';

function storeLocal(editor) {
  localStorage.setItem('markdown-editor', editor.getMarkdown());
}

ReactDOM.render(<ContractEditor onChange={storeLocal} />, document.getElementById('root'));
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3001](http://localhost:30001 to view it in the browser.

The page will reload if you make edits.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
