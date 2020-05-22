/* eslint-disable */
import './general/polyfills';
import './general/intersection-observer';
// import utils from './general/utils';
// import lazyload from './general/lazyload';
/* eslint-enable */

// region Blocks

import formInput from '../blocks/form-input/form-input';
import formTextarea from '../blocks/form-textarea/form-textarea';
import modal from '../blocks/modal/modal';
// import gagerModal from '../blocks/gager-modal/gager-modal';
import callRequestModal from '../blocks/call-request-modal/call-request-modal';
// import discountModal from '../blocks/discount-modal/discount-modal';
import header from '../blocks/header/header';
import offer from '../blocks/offer/offer';
// import mainSlider from '../blocks/main-slider/main-slider';


import faq from '../blocks/faq/faq';
import askQuestionModal from '../blocks/ask-question-modal/ask-question-modal';

// endregion

formInput();
formTextarea();
modal();
// gagerModal();
// discountModal();
callRequestModal();
header();
offer();
// mainSlider();

faq();
askQuestionModal();
