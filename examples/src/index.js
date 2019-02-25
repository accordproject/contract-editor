import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ContractEditor } from '../../src';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';

function storeLocal(editor) {
  localStorage.setItem('markdown-editor', editor.getMarkdown());
}

const defaultMarkdown = `# Supply Agreement
This is a supply agreement between Party A and Party B.

# Payment

<clause src="https://templates.accordproject.org/archives/full-payment-upon-signature@0.5.0.cta">
Upon the signing of this Agreement, "Dan" shall pay the total purchase price to "Steve" in the amount of 0.01 USD.
</clause>

## Late Delivery And Penalty

<clause src="https://templates.accordproject.org/archives/latedeliveryandpenalty@0.9.1.cta">
Late Delivery and Penalty. In case of delayed delivery except for Force Majeure cases, "Dan" (the Seller) shall pay to "Steve" (the Buyer) for every 2 days of delay penalty amounting to 10.5% of the total value of the Equipment whose delivery has been delayed. Any fractional part of a days is to be considered a full days. The total amount of penalty shall not however, exceed 55% of the total value of the Equipment involved in late delivery. If the delay is more than 15 days, the Buyer is entitled to terminate this Contract.
</clause>

End.
`;

ReactDOM.render(<ContractEditor plugins={[]} markdown = {defaultMarkdown} onChange={storeLocal} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
