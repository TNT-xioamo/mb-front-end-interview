import{_ as i,c as a,a0 as t,o as e}from"./chunks/framework.Canm8p3M.js";const c=JSON.parse('{"title":"react","description":"","frontmatter":{},"headers":[],"relativePath":"src/questions/front-frame/1_React.md","filePath":"src/questions/front-frame/1_React.md","lastUpdated":1735266018000}'),n={name:"src/questions/front-frame/1_React.md"};function l(h,s,k,p,r,d){return e(),a("div",null,s[0]||(s[0]=[t('<h1 id="react" tabindex="-1">react <a class="header-anchor" href="#react" aria-label="Permalink to &quot;react&quot;">​</a></h1><h2 id="什么是-react-的生命周期方法" tabindex="-1">什么是 React 的生命周期方法？ <a class="header-anchor" href="#什么是-react-的生命周期方法" aria-label="Permalink to &quot;什么是 React 的生命周期方法？&quot;">​</a></h2><h4 id="类型-基础" tabindex="-1">类型：基础 <a class="header-anchor" href="#类型-基础" aria-label="Permalink to &quot;类型：基础&quot;">​</a></h4><h4 id="级别-w1" tabindex="-1">级别：W1 <a class="header-anchor" href="#级别-w1" aria-label="Permalink to &quot;级别：W1&quot;">​</a></h4><h4 id="解答-3-分" tabindex="-1">解答（3 分） <a class="header-anchor" href="#解答-3-分" aria-label="Permalink to &quot;解答（3 分）&quot;">​</a></h4><ul><li><strong>1：</strong> 类组件声明周期方法:</li><li><strong>1：</strong> 挂载阶段：constructor(): 在组件创建时调用，通常用来初始化状态; componentDidMount(): 在组件挂载到 DOM 后调用，一般用来执行异步请求或订阅事件。</li><li><strong>1：</strong> 更新阶段：shouldComponentUpdate(): 用来优化性能，判断组件是否需要重新渲染； componentDidUpdate(): 在组件更新后调用，通常用于来操作DOM。</li><li><strong>1：</strong> 卸载阶段：componentWillUnmount(): 在组件从 DOM 中卸载之前调用，一般用来清理资源。</li><li><strong>1：</strong> 函数组件生命周期（Hooks）:</li><li><strong>1：</strong> useEffect(): 用来替代 componentDidMount、componentDidUpdate 和 componentWillUnmount，可以设置副作用和清理操作。</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">useEffect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 组件挂载时执行的操作</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 组件卸载时清理资源</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, [dependencies]);  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 依赖数组</span></span></code></pre></div><h2 id="react-中的-hook-是什么" tabindex="-1">React 中的 Hook 是什么？ <a class="header-anchor" href="#react-中的-hook-是什么" aria-label="Permalink to &quot;React 中的 Hook 是什么？&quot;">​</a></h2><h4 id="类型-基础-1" tabindex="-1">类型：基础 <a class="header-anchor" href="#类型-基础-1" aria-label="Permalink to &quot;类型：基础&quot;">​</a></h4><h4 id="级别-w1-1" tabindex="-1">级别：W1 <a class="header-anchor" href="#级别-w1-1" aria-label="Permalink to &quot;级别：W1&quot;">​</a></h4><h4 id="解答-5-分" tabindex="-1">解答（5 分） <a class="header-anchor" href="#解答-5-分" aria-label="Permalink to &quot;解答（5 分）&quot;">​</a></h4><ul><li><strong>1：</strong> useState()：用于在函数组件中添加状态。</li><li><strong>1：</strong> useEffect()：用于在函数组件中执行副作用操作（如数据请求、订阅、DOM 操作等）。</li><li><strong>1：</strong> useContext()：用于在函数组件中访问上下文（Context）。</li><li><strong>1：</strong> useReducer()：类似于 useState，但适用于复杂的状态管理，类似于 Redux 的 reducer。</li><li><strong>1：</strong> useRef()：用于访问组件中的 DOM 节点或保存可变的值。</li><li><strong>1：</strong> useMemo() 和 useCallback()：用于性能优化，避免不必要的渲染。</li></ul><h2 id="react-中的状态和-props-有什么区别" tabindex="-1">React 中的状态和 props 有什么区别？ <a class="header-anchor" href="#react-中的状态和-props-有什么区别" aria-label="Permalink to &quot;React 中的状态和 props 有什么区别？&quot;">​</a></h2><h4 id="类型-基础-2" tabindex="-1">类型：基础 <a class="header-anchor" href="#类型-基础-2" aria-label="Permalink to &quot;类型：基础&quot;">​</a></h4><h4 id="级别-w2" tabindex="-1">级别：W2 <a class="header-anchor" href="#级别-w2" aria-label="Permalink to &quot;级别：W2&quot;">​</a></h4><h4 id="解答-2-分" tabindex="-1">解答（2 分） <a class="header-anchor" href="#解答-2-分" aria-label="Permalink to &quot;解答（2 分）&quot;">​</a></h4><ul><li><strong>1：</strong> props（属性）：由父组件传递给子组件，用于传递数据。props 是只读的，子组件不能修改 props。</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MyComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">props</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;{props.message}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ul><li><strong>1：</strong> state（状态）：由组件自身管理，用于存储和跟踪组件的动态数据。state 是可变的，可以通过 this.setState()（类组件）或 useState()（函数组件）来更新。</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MyComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">count</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">setCount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useState</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onClick</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setCount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(count </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)}&gt;{count}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="react-中如何处理事件" tabindex="-1">React 中如何处理事件？ <a class="header-anchor" href="#react-中如何处理事件" aria-label="Permalink to &quot;React 中如何处理事件？&quot;">​</a></h2><h4 id="类型-基础-3" tabindex="-1">类型：基础 <a class="header-anchor" href="#类型-基础-3" aria-label="Permalink to &quot;类型：基础&quot;">​</a></h4><h4 id="级别-w2-1" tabindex="-1">级别：W2 <a class="header-anchor" href="#级别-w2-1" aria-label="Permalink to &quot;级别：W2&quot;">​</a></h4><h4 id="解答-3-分-1" tabindex="-1">解答（3 分） <a class="header-anchor" href="#解答-3-分-1" aria-label="Permalink to &quot;解答（3 分）&quot;">​</a></h4><ul><li><strong>1：</strong> React 事件处理的方式与原生 JavaScript 不同，React 使用事件委托来优化性能，并且事件名称采用驼峰命名法。</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MyComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> handleClick</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">event</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Button clicked!&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  };</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onClick</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{handleClick}&gt;Click Me&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ul><li><strong>1：</strong> React 会自动绑定事件处理函数。</li><li><strong>1：</strong> 事件对象会被 React 规范化。</li></ul><h2 id="usestate-连续调用-页面不更新" tabindex="-1">useState 连续调用，页面不更新？ <a class="header-anchor" href="#usestate-连续调用-页面不更新" aria-label="Permalink to &quot;useState 连续调用，页面不更新？&quot;">​</a></h2><h4 id="类型-基础-4" tabindex="-1">类型：基础 <a class="header-anchor" href="#类型-基础-4" aria-label="Permalink to &quot;类型：基础&quot;">​</a></h4><h4 id="级别-w1、w2、w3、w4、w5、w6" tabindex="-1">级别：<code>W1</code>、<code>W2</code>、<code>W3</code>、<code>W4</code>、<code>W5</code>、<code>W6</code> <a class="header-anchor" href="#级别-w1、w2、w3、w4、w5、w6" aria-label="Permalink to &quot;级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`&quot;">​</a></h4><h4 id="解答-2分" tabindex="-1">解答（2分） <a class="header-anchor" href="#解答-2分" aria-label="Permalink to &quot;解答（2分）&quot;">​</a></h4><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">age</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">setAge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useState</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">42</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> handleClick</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  setAge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// setAge(42 + 1)</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  setAge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// setAge(42 + 1)</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  setAge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// setAge(42 + 1)</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 点击一次后，age 将只会变为 43 而不是 45！</span></span></code></pre></div><ul><li><strong>1：</strong> 连续调用 useState 不会触发页面更新，因为每次调用 useState 都会返回一个新的状态值和更新状态的函数。</li><li><strong>1：</strong> 要连续更新状态，你可以使用函数式更新，将当前状态作为参数传递给更新函数</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> handleClick</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  setAge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// setAge(42 =&gt; 43)</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  setAge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// setAge(43 =&gt; 44)</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  setAge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// setAge(44 =&gt; 45)</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="什么是-react-它的主要特点是什么" tabindex="-1">什么是 React？它的主要特点是什么？ <a class="header-anchor" href="#什么是-react-它的主要特点是什么" aria-label="Permalink to &quot;什么是 React？它的主要特点是什么？&quot;">​</a></h2><h4 id="类型-基础-5" tabindex="-1">类型：<code>基础</code> <a class="header-anchor" href="#类型-基础-5" aria-label="Permalink to &quot;类型：`基础`&quot;">​</a></h4><h4 id="级别-w1、w2、w3、w4、w5、w6-1" tabindex="-1">级别：<code>W1</code>、<code>W2</code>、<code>W3</code>、<code>W4</code>、<code>W5</code>、<code>W6</code> <a class="header-anchor" href="#级别-w1、w2、w3、w4、w5、w6-1" aria-label="Permalink to &quot;级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`&quot;">​</a></h4><h4 id="解答-3-分-2" tabindex="-1">解答（3 分） <a class="header-anchor" href="#解答-3-分-2" aria-label="Permalink to &quot;解答（3 分）&quot;">​</a></h4><ul><li><p>React 是一个用于构建用户界面的 JavaScript 库，由 Facebook 开发并维护。它主要用于构建单页应用程序（SPA）和复杂的用户界面。React 的主要特点包括：</p></li><li><p>组件化：React 将 UI 分解成独立的、可重用的组件。每个组件都有自己的逻辑和控制。</p></li><li><p>虚拟 DOM：React 使用虚拟 DOM 来提高性能。虚拟 DOM 是一个内存中的树结构，React 会先在虚拟 DOM 中进行操作，然后批量更新真实 DOM。</p></li><li><p>声明式编程：React 采用声明式编程风格，开发者只需描述 UI 应该是什么样的，React 会负责处理 UI 的变化。</p></li><li><p>JSX：React 使用 JSX（JavaScript XML）语法，允许在 JavaScript 中编写类似 HTML 的标记。</p></li><li><p>生态系统丰富：React 拥有丰富的生态系统，包括路由器（React Router）、状态管理库（Redux、MobX）等。</p></li></ul><h2 id="什么是-jsx-它有什么优点" tabindex="-1">什么是 JSX？它有什么优点？ <a class="header-anchor" href="#什么是-jsx-它有什么优点" aria-label="Permalink to &quot;什么是 JSX？它有什么优点？&quot;">​</a></h2><h4 id="类型-基础-6" tabindex="-1">类型：<code>基础</code> <a class="header-anchor" href="#类型-基础-6" aria-label="Permalink to &quot;类型：`基础`&quot;">​</a></h4><h4 id="级别-w1、w2、w3、w4、w5、w6-2" tabindex="-1">级别：<code>W1</code>、<code>W2</code>、<code>W3</code>、<code>W4</code>、<code>W5</code>、<code>W6</code> <a class="header-anchor" href="#级别-w1、w2、w3、w4、w5、w6-2" aria-label="Permalink to &quot;级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`&quot;">​</a></h4><h4 id="解答-3-分-3" tabindex="-1">解答（3 分） <a class="header-anchor" href="#解答-3-分-3" aria-label="Permalink to &quot;解答（3 分）&quot;">​</a></h4><ul><li><p>JSX 是一种语法扩展，允许在 JavaScript 中编写类似 HTML 的标记。JSX 最终会被编译成普通的 JavaScript 代码.</p></li><li><p>可读性强：JSX 使得模板代码更加直观和易读，特别是对于复杂的 UI 结构。</p></li><li><p>类型检查：JSX 可以在编译时进行类型检查，减少运行时错误。</p></li><li><p>表达式支持：可以在 JSX 中嵌入 JavaScript 表达式，使得动态生成 UI 变得更加方便。</p></li><li><p>工具支持：现代开发工具（如 Babel）可以将 JSX 编译成兼容所有浏览器的 JavaScript 代码。</p></li></ul><h2 id="什么是虚拟-dom-它是如何工作的" tabindex="-1">什么是虚拟 DOM？它是如何工作的？ <a class="header-anchor" href="#什么是虚拟-dom-它是如何工作的" aria-label="Permalink to &quot;什么是虚拟 DOM？它是如何工作的？&quot;">​</a></h2><h4 id="类型-基础-7" tabindex="-1">类型：<code>基础</code> <a class="header-anchor" href="#类型-基础-7" aria-label="Permalink to &quot;类型：`基础`&quot;">​</a></h4><h4 id="级别-w1、w2、w3、w4、w5、w6-3" tabindex="-1">级别：<code>W1</code>、<code>W2</code>、<code>W3</code>、<code>W4</code>、<code>W5</code>、<code>W6</code> <a class="header-anchor" href="#级别-w1、w2、w3、w4、w5、w6-3" aria-label="Permalink to &quot;级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`&quot;">​</a></h4><h4 id="解答-3-分-4" tabindex="-1">解答（3 分） <a class="header-anchor" href="#解答-3-分-4" aria-label="Permalink to &quot;解答（3 分）&quot;">​</a></h4><ul><li><p>虚拟 DOM 是一个轻量级的内存中的 DOM 树表示。React 使用虚拟 DOM 来提高性能，避免频繁的操作真实 DOM。</p></li><li><p>创建虚拟 DOM：React 在内存中创建一个虚拟 DOM 树。</p></li><li><p>Diff 算法：当状态改变时，React 会比较新的虚拟 DOM 和旧的虚拟 DOM，找出差异（即最小的变更集合）。</p></li><li><p>批量更新：React 将这些差异批量应用到真实 DOM，减少 DOM 操作次数，提高性能。</p></li></ul><h2 id="react-中的单向数据流是什么意思" tabindex="-1">React 中的单向数据流是什么意思？ <a class="header-anchor" href="#react-中的单向数据流是什么意思" aria-label="Permalink to &quot;React 中的单向数据流是什么意思？&quot;">​</a></h2><h4 id="类型-基础-8" tabindex="-1">类型：<code>基础</code> <a class="header-anchor" href="#类型-基础-8" aria-label="Permalink to &quot;类型：`基础`&quot;">​</a></h4><h4 id="级别-w1、w2、w3、w4、w5、w6-4" tabindex="-1">级别：<code>W1</code>、<code>W2</code>、<code>W3</code>、<code>W4</code>、<code>W5</code>、<code>W6</code> <a class="header-anchor" href="#级别-w1、w2、w3、w4、w5、w6-4" aria-label="Permalink to &quot;级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`&quot;">​</a></h4><h4 id="解答-3-分-5" tabindex="-1">解答（3 分） <a class="header-anchor" href="#解答-3-分-5" aria-label="Permalink to &quot;解答（3 分）&quot;">​</a></h4><ul><li><p>单向数据流 是 React 的核心设计理念之一。在单向数据流中，数据只能从父组件流向子组件，不能反向流动。这种方式使得数据流更加清晰和可控。</p></li><li><p>数据一致性：单向数据流确保了数据的一致性，避免了数据的混乱和不可预测的变化。</p></li><li><p>易于调试：数据流的单一方向使得调试更加容易，可以更容易地追踪数据的变化。</p></li><li><p>可预测性：单向数据流使得应用的状态变化更加可预测，便于维护和扩展。</p></li></ul><h2 id="什么是函数组件和类组件-它们有什么区别" tabindex="-1">什么是函数组件和类组件？它们有什么区别？ <a class="header-anchor" href="#什么是函数组件和类组件-它们有什么区别" aria-label="Permalink to &quot;什么是函数组件和类组件？它们有什么区别？&quot;">​</a></h2><h4 id="类型-基础-9" tabindex="-1">类型：<code>基础</code> <a class="header-anchor" href="#类型-基础-9" aria-label="Permalink to &quot;类型：`基础`&quot;">​</a></h4><h4 id="级别-w1、w2、w3、w4、w5、w6-5" tabindex="-1">级别：<code>W1</code>、<code>W2</code>、<code>W3</code>、<code>W4</code>、<code>W5</code>、<code>W6</code> <a class="header-anchor" href="#级别-w1、w2、w3、w4、w5、w6-5" aria-label="Permalink to &quot;级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`&quot;">​</a></h4><h4 id="解答-3-分-6" tabindex="-1">解答（3 分） <a class="header-anchor" href="#解答-3-分-6" aria-label="Permalink to &quot;解答（3 分）&quot;">​</a></h4><ul><li><p>函数组件：</p></li><li><p>定义：函数组件是一个简单的 JavaScript 函数，接收 props 作为参数，返回 JSX。</p></li><li><p>优点：代码更简洁，性能更好（因为没有类的开销）。</p></li><li><p>限制：早期版本的函数组件不支持生命周期方法和状态管理，但随着 Hooks 的引入，这些限制已经被解除。</p></li><li><p>类组件：</p></li><li><p>定义：类组件是继承自 React.Component 的 ES6 类，可以定义生命周期方法和管理状态。</p></li><li><p>优点：支持生命周期方法和状态管理，功能更强大。</p></li><li><p>缺点：代码相对复杂，性能略逊于函数组件。</p></li></ul><h2 id="react-memo-的作用和使用场景" tabindex="-1">React.memo 的作用和使用场景 <a class="header-anchor" href="#react-memo-的作用和使用场景" aria-label="Permalink to &quot;React.memo 的作用和使用场景&quot;">​</a></h2><h4 id="类型-基础-10" tabindex="-1">类型：<code>基础</code> <a class="header-anchor" href="#类型-基础-10" aria-label="Permalink to &quot;类型：`基础`&quot;">​</a></h4><h4 id="级别-w1、w2、w3、w4、w5、w6-6" tabindex="-1">级别：<code>W1</code>、<code>W2</code>、<code>W3</code>、<code>W4</code>、<code>W5</code>、<code>W6</code> <a class="header-anchor" href="#级别-w1、w2、w3、w4、w5、w6-6" aria-label="Permalink to &quot;级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`&quot;">​</a></h4><h4 id="解答-5-分-1" tabindex="-1">解答（5 分） <a class="header-anchor" href="#解答-5-分-1" aria-label="Permalink to &quot;解答（5 分）&quot;">​</a></h4><details><ul><li><strong>1：</strong> 作用1： 性能优化：React.memo 是一个高阶组件，它通过对组件的 props 进行浅比较来决定组件是否需要重新渲染。如果传入组件的 props 没有发生变化，组 件就不会重新渲染；只有当 props 发生变化时，组件才会重新渲染。这有助于减少不必要的渲染操作，提高应用程序的性能。</li><li><strong>1：</strong> 作用2：避免重复渲染：在 React 应用中，当一个组件的父组件重新渲染时，它默认会导致子组件也重新渲染。对于那些只依赖于 props 且计算成本较高的组件，这 种默认行为可能会导致性能浪费。React.memo 可以帮助解决这个问题，它可以让组件 “记住” 之前的渲染结果，在 props 不变的情况下跳过重新渲染。</li><li><strong>1：</strong> 使用场景1：纯展示组件。纯展示组件是指那些只根据传入的 props 来展示 UI，没有内部状态变化和副作用（如数据获取、订阅事件等）的组件。例如，一个简单的用户 信息展示组件，它接收用户的姓名、年龄等信息作为 props，并将这些信息展示出来。示例：</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> React </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;react&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UserInfo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ({ </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">age</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Name: {name}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Age: {age}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> React.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">memo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(UserInfo);</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//在这个例子中，UserInfo 组件是一个纯展示组件。通过使用 React.memo 包裹它，当组件的 name 和 age props 没有变化时，组件就不会重新渲染，从而提高了性能。</span></span></code></pre></div><ul><li><strong>1：</strong> 使用场景2：大型组件树中的子组件。在大型的 React 应用中，组件树可能会非常复杂。在这种情况下，一些深层次的子组件可能会因为父组件的重新渲染而频繁地重新渲染，即 使这些子组件的 props 并没有实际变化。示例：</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> React </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;react&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Sidebar</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ({ </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">menuData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 复杂的菜单渲染逻辑</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {menuData.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">MenuItem</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> key</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{item.id} </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">item</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{item} /&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            ))}</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    );</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> React.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">memo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Sidebar);</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//通过使用 React.memo 包裹 Sidebar 组件，当父组件重新渲染但 menuData 没有变化时，Sidebar 组件就不会重新渲染，避免了不必要的渲染开销，提高了整个页面的性能。</span></span></code></pre></div><ul><li><strong>1：</strong> 使用场景3：在函数式组件中。如果组件的渲染逻辑比较复杂，或者组件在一个频繁更新的环境中（如在一个实时数据更新的仪表盘应用中），使用 React.memo 可以有效减少不 必要的渲染。示例：</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> React </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;react&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RealTimeChart</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ({ </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">dataArray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">chartType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 复杂的图表绘制逻辑，可能涉及到数据处理、坐标轴设置等</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Chart</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{dataArray} </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{chartType} /&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    );</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> React.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">memo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(RealTimeChart);</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//当数据更新时，只有 dataArray 或 chartType 发生变化，RealTimeChart 组件才会重新渲染，否则将使用之前的渲染结果，避免了因其他无关因素导致的重新渲染，提升了性能。</span></span></code></pre></div></details><h2 id="什么是-react-中的高阶组件-hoc-请简单举例说明其用法" tabindex="-1">什么是 React 中的高阶组件（HOC）？请简单举例说明其用法 <a class="header-anchor" href="#什么是-react-中的高阶组件-hoc-请简单举例说明其用法" aria-label="Permalink to &quot;什么是 React 中的高阶组件（HOC）？请简单举例说明其用法&quot;">​</a></h2><h4 id="类型-基础-11" tabindex="-1">类型：<code>基础</code> <a class="header-anchor" href="#类型-基础-11" aria-label="Permalink to &quot;类型：`基础`&quot;">​</a></h4><h4 id="级别-w1、w2、w3、w4、w5、w6-7" tabindex="-1">级别：<code>W1</code>、<code>W2</code>、<code>W3</code>、<code>W4</code>、<code>W5</code>、<code>W6</code> <a class="header-anchor" href="#级别-w1、w2、w3、w4、w5、w6-7" aria-label="Permalink to &quot;级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`&quot;">​</a></h4><h4 id="解答-3-分-7" tabindex="-1">解答（3 分） <a class="header-anchor" href="#解答-3-分-7" aria-label="Permalink to &quot;解答（3 分）&quot;">​</a></h4><ul><li><strong>1：</strong> 高阶组件（Higher - Order Component，简称 HOC）是一个函数，它接收一个组件作为参数，并返回一个新的组件。这个新组件通常会增强或修改原始组件 的功能、行为或外观。可以把它看作是一种组件的 “工厂函数”，用于创建具有额外功能的组件。</li><li><strong>1：</strong> 用法1：代码复用。HOC 可以将多个组件共有的逻辑提取出来，放到一个地方进行复用。例如，多个组件都需要进行权限验证，就可以创建一个权限验证的 HOC， 让这些组件都通过这个 HOC 来获得权限验证功能。</li><li><strong>1：</strong> 用法2：逻辑抽象和分离。可以将一些复杂的、与业务逻辑无关的功能（如数据加载、动画效果等）从组件内部抽象出来，通过 HOC 来处理，使得组件本身更加专 注于自己的核心业务逻辑（如展示 UI 和处理用户交互）。</li></ul><h2 id="什如何在-react-应用中进行有效的内存泄漏排查和修复" tabindex="-1">什如何在 React 应用中进行有效的内存泄漏排查和修复？ <a class="header-anchor" href="#什如何在-react-应用中进行有效的内存泄漏排查和修复" aria-label="Permalink to &quot;什如何在 React 应用中进行有效的内存泄漏排查和修复？&quot;">​</a></h2><h4 id="类型-拓展" tabindex="-1">类型：<code>拓展</code> <a class="header-anchor" href="#类型-拓展" aria-label="Permalink to &quot;类型：`拓展`&quot;">​</a></h4><h4 id="级别-w1、w2、w3、w4、w5、w6-8" tabindex="-1">级别：<code>W1</code>、<code>W2</code>、<code>W3</code>、<code>W4</code>、<code>W5</code>、<code>W6</code> <a class="header-anchor" href="#级别-w1、w2、w3、w4、w5、w6-8" aria-label="Permalink to &quot;级别：`W1`、`W2`、`W3`、`W4`、`W5`、`W6`&quot;">​</a></h4><h4 id="解答-3-分-8" tabindex="-1">解答（3 分） <a class="header-anchor" href="#解答-3-分-8" aria-label="Permalink to &quot;解答（3 分）&quot;">​</a></h4><ul><li><strong>1：</strong> 使用 Chrome 开发者工具的 Memory 面板进行内存快照分析，查找未被释放的对象；</li><li><strong>1：</strong> 检查组件卸载时是否取消了订阅、定时器、事件监听器等可能导致内存泄漏的源头；</li><li><strong>1：</strong> 对于使用了第三方库的情况，要确保库的使用方式正确，避免因库的不当使用造成内存泄漏。</li></ul>',74)]))}const E=i(n,[["render",l]]);export{c as __pageData,E as default};