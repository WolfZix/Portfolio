import SmoothPageLoad from './smooth-page-load.js';
SmoothPageLoad()

import '../styles/modern-normalize.css'
import '../styles/style.css';
import '../styles/components/header.css';
import '../styles/components/hero.css';
import '../styles/components/about.css';
import '../styles/components/work.css';
import '../styles/components/future.css';
import '../styles/utils.css';

import lazyloadingFun from './lazy-loading.js';
import showSites from './show-sites.js';

lazyloadingFun()
showSites()