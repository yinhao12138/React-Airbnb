import React, { memo } from "react";
import { RightWrapper } from "./style";

const FootRight = memo(() => {
  return (
    <RightWrapper>
      <div>
        <span className="item">京ICP备155555555号京ICP证 </span>
        <span className="item"> 166666号·京公网安备 </span>
        <span className="item">11010520202020号·安彼迎网络</span>
        （北京）有限公司·
        <span className="item">营业执照</span>
      </div>
      <div>
        <span> © 2023 Airbnb, Inc. All rights reserved.</span>·<span className="item">条款</span>·<span className="item">隐私政策</span>·
        <span className="item">网站地图</span>·<span>12345·违法和不良信息举报邮箱 2531134419@xxx.com</span>
      </div>
    </RightWrapper>
  );
});

export default FootRight;
