# screenSizeDetector
Alpine screen size detector x-data using Toolkit $screen

Deps:
https://github.com/alpine-collective/toolkit


## Why 
Didn't want to use the $screen magic over and over again on a bunch of components, so figured I'd get the screensize information once 
and then just use x-data wrapper in my app to access it everywhere. Might be possible with the $screen magic alone, but there were no docs for it so did it this way. 

Install @apline-collective/toolkit-screen using npm, then in main js:

import Alpine from 'alpinejs'

import Screen from '@alpine-collective/toolkit-screen'
import screenSizeDetector from './alpine/screenSizeDetector' // this is the location in your project for the js file

Alpine.plugin(Screen);
Alpine.data('screenSizeDetector', screenSizeDetector);


window.Alpine = Alpine

## Usage
0. Setup your sizes in the main js
1. Add to markup
<div x-data="screenSizeDetector()"></div>
2. Look at console log
3. Access it 
<div x-data="screenSizeDetector()" :class="{ 'text-sm': screenSize === 'sm', 'text-base': screenSize === 'md' }">
  ...
</div>
