### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `版本`
node v18.16.0
yarn 1.22.18
create-react-app 5.0.1


# 爱彼迎
# react脚手架隐藏了webpack
1.npm run eject [不推荐 将所有代码导出可能导致项目运行....]
2.craco => create-react-app config [推荐 会将自己配置的webpack与隐藏的webpack代码合并]

#craco 需求配置别名
1.const path = require('path')
const resolve = e => path.resolve(__dirname, e)

module.exports = {
  <!-- webpack -->
  webpack:{
    alias:{
      "@": resolve("src")<!-- webpack配置别名 -->
    } 
  }
}
将package script 配置成craco 会将配置的craco.config.js文件里的webpack代码与隐藏的webpack合并
2.react中引入文件首字母大写 如:[import Alias from "@/components/alias"]

[1. --------------------------------------------------------------------------------------------------------------------------------ROUTE]
#router 使用
懒加载
const Home = React.lazy(() => important('@/view/home'))<!-- 使用了懒加载 -->
<!-- 需要在index中使用Suspense等组件加载完成因为lazy是异步操作 --> 
<Suspense fallback="loading"> <!-- 在加载app渲染完成之前等待并且显示fallback里面的内容 -->
    <HashRouter>
      <App />
    </HashRouter>
</Suspense>


#监听路径改变
import { useLocation } from "react-router-dom";

const location = useLocation();
useEffect(() => {
  window.scrollTo(0, 0);
}, [location.pathname]);

<!-- location.pathname  监听路径改变回到顶部 -->


[2. -------------------------------------------------------------------------------------------------------------------------------- STORE]
#store 使用
import { useSelector, useDispatch, shallowEqual } from "react-redux";

  const { count } = useSelector((state) => {
    return {
      count: state.home.count,
    };
  }, shallowEqual);
  <!-- 重新渲染解决:shallowEqual(性能优化 浅层比较和purcomponent一样) 项目中不加会出现警告-->


#store 中 createAsyncThunk loading效果加载
创建一个异步thunk

export const fetchEntireList = createAsyncThunk("fetchEntireData", async (o) => {
  const res = await getEntireList(o);
  return res;
});

组件导入 并且调用
import { fetchEntireList } from "@/store/features/entire";

const dispatch = useDispatch();
dispatch(fetchEntireList({ offset: entireOffset, size: entireSize }));

fetchEntireList 有三种状态 pending fulfilled rejected 在此修改loading状态

  extraReducers: (builder) => {
    builder.addCase(fetchEntireList.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(fetchEntireList.fulfilled, (state, action) => {
      state.loading = false;
    });

      builder.addCase(fetchEntireList.rejected, (state, action) => {
      state.loading = false;
    });
  },


[3. --------------------------------------------------------------------------------------------------------------------------------REACT]
#memo  React hooks 使用
useState 存一个状态变量 返回两个值组成的数组可以结构
{
  message:存的值
  set函数可以更新state不同值并触发重新渲染´
}
const [message,setMessage] = useState('React') 注意[useState(初始值)初始化值只有在组件在第一次渲染的时候才是有效的] 列如 props改变了 组件render两次 第一次useState的值为空字符串 但是第二次props的值改变之后useState赋值并且有值了但是此时是无效的

useEffect 每次render之后都会执行
1.useEffect(() => {
  console.log('been run')
  return() => {console.log('clear')}
},[])
//组件首次挂载的时候会输出been run
//当组件被卸载时会输出clear
return () => {} [清除函数] 当组件卸载的时候unmounted 会执行清除函数 retun () => {} 
2.const [count, setCount] = useState(0);
useEffect(() => {
  console.log(`count: ${count}`);
return () => {
  console.log(`Cleanup : ${count}`);
};
}, [count]);
// 假设我们调用 setCount(1)：
// 控制台会首先输出 "Cleanup: 0"，然后输出 " count: 1"
在这个例子中，每当 count 的值发生变化时，都会首先执行清除函数，然后再执行 useEffect 的主体部分。

第二个参数[]发生改变的时候也会执行可以设置多个依赖项只要任意一项改变effect都会重新执行

useCallback


#react memo 阻止事件冒泡
function wishList(e, i) {
  e.stopPropagation();  <!-- 阻止事件冒泡 -->
  console.log("xx", i);
}
onClick={(event) => wishList(event, item)}

#react中使用input  
const [wishModelInput, setWishModelInput] = useState("");
value={wishModelInput}
<input value={wishModelInput}
  onChange={(e) => wishModelInputChange(e)}
  placeholder={"不能超过50个字符"}
  maxLength={50}>
</input>

 #react中的插槽  其中 1
 react中是用插槽可以使用props.children
 <!-- 父组件 -->
 <scrollView>
  <!--其中 <div>yinhao</div> 就是使用的插槽 -->
    <div>yinhao</div> 
 </scrollView>

<!-- 子组件 -->
 <div className="scroll-content" ref={scrollContentRef}>
   {props.children}
 </div>

 #react memo中路由跳转
  const navigate = useNavigate();
  function goDetail(i) {
    navigate("/entire");
  }


#react中使用 antd中 carousel走马灯 注意:在外循环多个item盒子

#react中限制父传子限制类型
布尔类型
PropTypes.bool
函数类型
PropType.func
必传字符串类型
PropType.string.isRequired




[4.--------------------------------------------------------------------------------------------------------------------------------CSS]
#noramlize 重置样式´
npm install --save normalize.css

#react项目中 [css in js] vscode 解决 vscode-styled-component 在js文件里面解决语法不提示
vscode version 【1.75】
vscode-styled-component version 【1.7.5】

#css 中 box-sizing;
默认值 box-sizing:content-box [width:100px] 表示设置宽度为100px 且边框和内边距的宽度都会被增加到最后绘制的元素宽度只能中  width:100px padding:10px border:1px solid red 最后宽度为 盒子最后宽度100+40+4 = 144
box-sizing:border-box 设置width:100px 表示包含border padding content 加起来一共100px (不包含margin)
inherit	指定 box-sizing 属性的值，应该从父元素继承


#react 设置class选中样式
classnames官网 https://github.com/JedWatson/classnames 
<!-- 在普通样式上加入选中样式当selectedId === index相等是样式为'item,selection'-->
 <div className={classNames("item", { selection: selectedId === index })}>{it}</div>

#React 行内样式需要加上双大括号且里面样式名称需要使用驼峰命名{{}}
<div style={{ borderRadius: "5px" }}></div>

#功能 鼠标悬浮缩放图片大小 class
<!-- 利用scale 控制图片大小 -->
transform: scale(1.1); 
<!-- 控制缩放图片动画 -->
transition: transform 0.3s ease-in;
<!-- 控制透明度 -->
<!-- 设置完全透明 -->
opacity: 0; 
<!-- 设置不透明 -->
opacity: 1; 

#style-components中设置直接子元素
const warapper = styled.div`
> .content{
  width:800px
}`
||
div > content

#安装style-components
npm install styled-components

#styled-components传入自定义布尔值
const { isFixed } = props;
<!-- 自定义属性名需要用$拼接 传入的值必须要全部小写 isFixed需要用{}传入 -->
<HeaderWrapper $isfixed={isFixed}> </HeaderWrapper>
<!-- 使用时需要加上$ -->
position: ${(props) => props.$isfixed};


[5.--------------------------------------------------------------------------------------------------------------------------------JS]
#原生js ´´
window.removeEventListener('click',() => {conslog.log('Yes')},true) 第二个参数设置为true的时候为捕获的意思

#js中引用类型
Object
Object中'子类型'
{
Array
Object
Date
RegExp
}


[6.-------------------------------------------------------------------------------------------------------------------------------- WEBPACK]
#webpack知识 前提在webpack下!!!
vue文件当中引用图片:
 <img :src="~/assets/img/cover_01.jpeg" alt="" /> //图片能显示因为vue-loadsh 解构了图片所以我们能看到
react或者其他中需要先导入图片🙂😀:
import coverImg from "@/assets/img/cover_01.jpeg";
<img src={coverImg} alt="" />
在styled.components的js文件下:
1.{
import coverImg from "@/assets/img/cover_01.jpeg";
export const HomeWrapper = styled.div`
  height: 529px;
  background: url(${coverImg}) center/cover;
`;
}
2.{
使用require导入
export const HomeWrapper = styled.div`
  height: 529px;
  background: url(${require("@/assets/img/cover_01.jpeg")}) center/cover;
`;
} 

#Ant Design 4.24.14版本 webpack配置less 
[Ant Design 5.10.2版本已经不支持less]
const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
    },
  ],
};











