// import G6 from "@antv/g6/build/g6";
import G6 from "@antv/g6";
import { uniqueId } from '@/utils'
// import Shape from '@antv/g/src/shapes'
const colors = {
  bgColor: '#fff',
  lineColor: '#ced4d9',
  mainColor: '#1890ff',
  mainTextColor: '#565758',
}
function alerS() {
  console.log('ffff');
}

const customNode = {
  init() {
    G6.registerNode("circleNode", {
      draw(cfg, group) {
        let r = cfg.r || 30;
        const mainId = cfg.nodeType + uniqueId();
        const shape = group.addShape("circle", {
          attrs: {
            ...cfg,
            id: mainId,
            r: r,
            stroke: colors.lineColor,
            fill: colors.bgColor, //此处必须有fill 不然不能触发事件
          }
        });
        group.addShape("circle", {
          attrs: {
            ...cfg,
            r: r - 4,
            parent: mainId,
            stroke: colors.lineColor,
            fill: colors.bgColor, //此处必须有fill 不然不能触发事件
          }
        });
        if (cfg.label) {
          group.addShape("text", {
            attrs: {
              ...cfg,
              id: 'label' + uniqueId(),
              textAlign: "center",
              textBaseline: "middle",
              text: cfg.label,
              parent: mainId,
              fill: colors.mainTextColor,
            }
          });
        }
        return shape;
      },
    });
    // G6.registerNode("normalNode", {
    //   draw(cfg, group) {
    //     const mainId = cfg.nodeType + uniqueId();
    //     const width = 120;
    //     const height = 75;
    //     // 此处必须有偏移 不然drag-node错位
    //     const offsetX = -width / 2
    //     const offsetY = -height / 2
    //     const shape = group.addShape("rect", {
    //       attrs: {
    //         ...cfg,
    //         id: mainId,
    //         width: width,
    //         height: height,
    //         x: offsetX,
    //         y: offsetY,
    //         stroke: colors.lineColor,
    //         fill: colors.bgColor,//此处必须有fill 不然不能触发事件
    //         radius: 8,
    //       },
    //     });
    //     group.addShape("dom", {
    //       attrs: {
    //         // ...cfg,
    //         width: width,
    //         height: height,
    //         // parent: mainId,
    //       },
    //       draggable: true,
    //       html: `<span>11</span>`
    //     });
    //     return shape;
    //   },
    //   //设置状态
    //   setState(name, value, item) {
    //     const group = item.getContainer();
    //     const shape = group.get("children")[0]; // 顺序根据 draw 时确定

    //     const children = group.findAll(g => {
    //       return g.attrs.parent === shape.attrs.id
    //     });
    //     const selectStyles = () => {
    //       shape.attr("stroke", colors.mainColor);
    //       shape.attr("cursor", "pointer");
    //       children.forEach(child => {
    //         child.attr("cursor", "pointer");
    //       });
    //     };
    //     const unSelectStyles = () => {
    //       shape.attr("stroke", colors.lineColor);
    //       shape.attr("cursor", "unset");
    //       children.forEach(child => {
    //         child.attr("cursor", "unset");
    //       });
    //     };
    //     switch (name) {
    //       case "selected":
    //       case "hover":
    //         if (value) {
    //           selectStyles()
    //         } else {
    //           unSelectStyles()
    //         }
    //         break;
    //     }
    //   }
    // });
    G6.registerNode('normalNode', {
        draw(cfg, group) {
          const mainId = cfg.nodeType + uniqueId();
          const width = 120;
          const height = 75;
          // 此处必须有偏移 不然drag-node错位
          const offsetX = -width / 2
          const offsetY = -height / 2
          const shape = group.addShape("rect", {
            attrs: {
              ...cfg,
              id: mainId,
              width: width,
              height: height,
              x: offsetX,
              y: offsetY,
              stroke: colors.lineColor,
              fill: colors.bgColor,//此处必须有fill 不然不能触发事件
              radius: 8,
            },
          });
          console.log(G6.Util)
          group.addShape('dom', {
            attrs: {
              ...cfg,
              id: mainId,
              width: width - 10,
              height: height - 10,
              x: offsetX + 5,
              y: offsetY + 5,
              // 传入 DOM 的 html
              html: `
            <div onclick="alert(111)" style="background-color: #fff; border: 2px solid #5B8FF9; border-radius: 5px; width: ${
              width - 10
            }px; height: ${height - 10}px; display: flex;">
              <div style="height: 100%; width: 33%; background-color: #CDDDFD">
                <img alt="img" style="line-height: 100%; padding-top: 6px; padding-left: 8px;" src="https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Q_FQT6nwEC8AAAAAAAAAAABkARQnAQ" width="20" height="20" />  
              </div>
              <span style="margin:auto; padding:auto;" class="link-name">${cfg.label}</span>
            </div>
              `,
            },
            // draggable: true,
          });
          return shape;
        },
      },
    );
    G6.registerNode("customNode", {
      draw(cfg, group) {
        let size = cfg.size;
        if(!size){
          size=[170,34]
        }
        // 此处必须是NUMBER 不然bbox不正常
        const width = parseInt(size[0]);
        const height = parseInt(size[1]);
        const color = cfg.color;
        // 此处必须有偏移 不然drag-node错位
        const offsetX = -width / 2
        const offsetY = -height / 2
        const mainId = 'rect' + uniqueId()
        const shape = group.addShape("rect", {
          attrs: {
            ...cfg,
            id: mainId,
            x: offsetX,
            y: offsetY,
            width: width,
            height: height,
            stroke: "#ced4d9",
            fill: '#fff',//此处必须有fill 不然不能触发事件
            radius: 4
          }
        });
        group.addShape("rect", {
          attrs: {
            ...cfg,
            x: offsetX,
            y: offsetY,
            width: 4,
            height: height,
            fill: color,
            parent: mainId,
            radius: [4, 0, 0, 4]
          }
        });
        const img = group.addShape("image", {
          attrs: {
            ...cfg,
            x: offsetX + 16,
            y: offsetY + 8,
            width: 20,
            height: 16,
            img: cfg.image,
            parent: mainId
          },
        });
        img.on('click', () => {
          // eslint-disable-next-line no-debugger
          debugger
        });
        group.addShape("image", {
          attrs: {
            ...cfg,
            x: offsetX + width - 32,
            y: offsetY + 8,
            width: 16,
            height: 16,
            parent: mainId,
            img: cfg.stateImage
          }
        });
        if(cfg.backImage){
          const clip = new G6.Shape.Rect({
            attrs: {
              ...cfg,
              x: offsetX,
              y: offsetY,
              width: width,
              height: height,
              fill:'#fff',
              radius: 4
            }
        });
          group.addShape("image", {
            attrs: {
              ...cfg,
              x: offsetX,
              y: offsetY,
              width: width,
              height: height,
              img: cfg.backImage,
              clip: clip
            }
          });
        }
        if (cfg.label) {
           group.addShape("text", {
            attrs: {
              ...cfg,
              id: 'label' + uniqueId(),
              x: offsetX + width / 2,
              y: offsetY + height / 2,
              textAlign: "center",
              textBaseline: "middle",
              text: cfg.label,
              parent: mainId,
              fill: "#565758"
            }
          });
        }
        if (cfg.inPoints) {
          for (let i = 0; i < cfg.inPoints.length; i++) {
            let x,
              y = 0;
            //0为顶 1为底
            if (cfg.inPoints[i][0] === 0) {
              y = 0;
            } else {
              y = height;
            }
            x = width * cfg.inPoints[i][1];
            const id = 'circle' + uniqueId()
            group.addShape("circle", {
              attrs: {
                ...cfg,
                id: 'circle' + uniqueId(),
                parent: id,
                x: x + offsetX,
                y: y + offsetY,
                r: 10,
                isInPointOut: true,
                fill: "#1890ff",
                opacity: 0
              }
            });
            group.addShape("circle", {
              attrs: {
                ...cfg,
                id: id,
                x: x + offsetX,
                y: y + offsetY,
                r: 3,
                isInPoint: true,
                fill: "#fff",
                stroke: "#1890ff",
                opacity: 0
              }
            });
          }
        }
        if (cfg.outPoints) {
          for (let i = 0; i < cfg.outPoints.length; i++) {
            let x,
              y = 0;
            //0为顶 1为底
            if (cfg.outPoints[i][0] === 0) {
              y = 0;
            } else {
              y = height;
            }
            x = width * cfg.outPoints[i][1];
            const id = 'circle' + uniqueId()
            group.addShape("circle", {
              attrs: {
                ...cfg,
                id: 'circle' + uniqueId(),
                parent: id,
                x: x + offsetX,
                y: y + offsetY,
                r: 10,
                isOutPointOut: true,
                fill: "#1890ff",
                opacity: 0//默認0 需要時改成0.3
              }
            });
            group.addShape("circle", {
              attrs: {
                ...cfg,
                id: id,
                x: x + offsetX,
                y: y + offsetY,
                r: 3,
                isOutPoint: true,
                fill: "#fff",
                stroke: "#1890ff",
                opacity: 0
              }
            });
          }
        }
        //group.sort()
        // 添加文本、更多图形
        return shape;
      },
      //设置状态
      setState(name, value, item) {
        const group = item.getContainer();
        const shape = group.get("children")[0]; // 顺序根据 draw 时确定

        const children = group.findAll(g => {
          return g.attrs.parent === shape.attrs.id
        });
        const circles = group.findAll(circle => {
          return circle.attrs.isInPoint || circle.attrs.isOutPoint;
        });
        const selectStyles = () => {
          shape.attr("fill", "#f3f9ff");
          shape.attr("stroke", "#6ab7ff");
          shape.attr("cursor", "move");
          children.forEach(child => {
            child.attr("cursor", "move");
          });
          circles.forEach(circle => {
            circle.attr('opacity', 1)
          })
        };
        const unSelectStyles = () => {
          shape.attr("fill", "#fff");
          shape.attr("stroke", "#ced4d9");
          circles.forEach(circle => {
            circle.attr('opacity', 0)
          })
        };
        switch (name) {
          case "selected":
          case "hover":
            if (value) {
              selectStyles()
            } else {
              unSelectStyles()
            }
            break;
        }
      }
    });
  }
}

export default customNode
