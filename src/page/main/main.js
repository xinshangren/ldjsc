export const mainJs={
    changeTabStyle: function(id) {
        switch (parseInt(id)) {
          case 0: //头条
            $("#0")
              .find("img")
              .attr("src", require("@/assets/img/icon_news_selected.png"));
            $("#0")
              .find("div")
              .attr("style", "color:#2599E6;");
  
            $("#1")
              .find("img")
              .attr("src", require("@/assets/img/icon_supervise.png"));
            $("#1")
              .find("div")
              .attr("style", "color:#666666;");
  
            $("#2")
              .find("img")
              .attr("src", require("@/assets/img/icon_ding.png"));
            $("#2")
              .find("div")
              .attr("style", "color:#666666;");
  
            $("#3")
              .find("img")
              .attr("src", require("@/assets/img/icon_hotline.png"));
            $("#3")
              .find("div")
              .attr("style", "color:#666666;");
            break;
          case 1: //督办
            $("#0")
              .find("img")
              .attr("src", require("@/assets/img/icon_news.png"));
            $("#0")
              .find("div")
              .attr("style", "color:#666666;");
  
            $("#1")
              .find("img")
              .attr("src", require("@/assets/img/icon_supervise_selected.png"));
            $("#1")
              .find("div")
              .attr("style", "color:#2599E6;");
  
            $("#2")
              .find("img")
              .attr("src", require("@/assets/img/icon_ding.png"));
            $("#2")
              .find("div")
              .attr("style", "color:#666666;");
  
            $("#3")
              .find("img")
              .attr("src", require("@/assets/img/icon_hotline.png"));
            $("#3")
              .find("div")
              .attr("style", "color:#666666;");
            break;
          case 2: //钉办
            $("#0")
              .find("img")
              .attr("src", require("@/assets/img/icon_news.png"));
            $("#0")
              .find("div")
              .attr("style", "color:#666666;");
  
            $("#1")
              .find("img")
              .attr("src", require("@/assets/img/icon_supervise.png"));
            $("#1")
              .find("div")
              .attr("style", "color:#666666;");
  
            $("#2")
              .find("img")
              .attr("src", require("@/assets/img/icon_ding_selected.png"));
            $("#2")
              .find("div")
              .attr("style", "color:#2599E6;");
  
            $("#3")
              .find("img")
              .attr("src", require("@/assets/img/icon_hotline.png"));
            $("#3")
              .find("div")
              .attr("style", "color:#666666;");
            break;
          case 3: //热线
            $("#0")
              .find("img")
              .attr("src", require("@/assets/img/icon_news.png"));
            $("#0")
              .find("div")
              .attr("style", "color:#666666;");
  
            $("#1")
              .find("img")
              .attr("src", require("@/assets/img/icon_supervise.png"));
            $("#1")
              .find("div")
              .attr("style", "color:#666666;");
  
            $("#2")
              .find("img")
              .attr("src", require("@/assets/img/icon_ding.png"));
            $("#2")
              .find("div")
              .attr("style", "color:#666666;");
  
            $("#3")
              .find("img")
              .attr("src", require("@/assets/img/icon_hotline_selected.png"));
            $("#3")
              .find("div")
              .attr("style", "color:#2599E6;");
            break;
          case 4: //主页
            $("#0")
              .find("img")
              .attr("src", require("@/assets/img/icon_news.png"));
            $("#0")
              .find("div")
              .attr("style", "color:#666666;");
  
            $("#1")
              .find("img")
              .attr("src", require("@/assets/img/icon_supervise.png"));
            $("#1")
              .find("div")
              .attr("style", "color:#666666;");
  
            $("#2")
              .find("img")
              .attr("src", require("@/assets/img/icon_ding.png"));
            $("#2")
              .find("div")
              .attr("style", "color:#666666;");
  
            $("#3")
              .find("img")
              .attr("src", require("@/assets/img/icon_hotline.png"));
            $("#3")
              .find("div")
              .attr("style", "color:#666666;");
            break;
          default:
            break;
        }
      }
}