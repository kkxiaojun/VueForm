<template>
  <div class="form-wrap clearfix">
    <div class="header">
      <div class="logo">
        <img src="../../common/images/logo.png" alt="logo">
      </div>
      <nav class="nav">
        <router-link to="">135，欢迎你！</router-link>
        <router-link to="">
          <i class="el-icon-question"></i> 帮助</router-link>
        <router-link to="/home">注销</router-link>
      </nav>
    </div>
    <div class="content">
      <div class="content-action">
        <div class="action-left" @click="back">
          <i class="el-icon-back"></i>返回
        </div>
        <div class="action-right" v-if="dropForm.formItems.length>0">
          <el-button type="primary" size="small" @click.stop="dialogPreview = true">预览</el-button>
          <el-button type="primary" size="small" @click.stop="save">保存</el-button>
          <el-dialog title="" :fullscreen="true" custom-class="bg-color" :visible.sync="dialogPreview">
            <preview-form :form="dropForm"></preview-form>
          </el-dialog>
        </div>
      </div>
      <div class="content-drag clearfix">
        <div class="leftForm left">
          <div class="form-title">通用字段</div>
          <draggable element="ul" :list="components" class="form-type clearfix dragArea" :options="componentsOptions" :clone="onClone">
            <li v-for="(component, index) in components" :key="index" class="collection-item">
              <i :class="getIcon(component.type)"></i> {{component.label}}
            </li>
          </draggable>
          <div class="form-title mt-36">常用信息</div>
          <draggable element="ul" :list="components1" class="form-type clearfix dragArea" :options="componentsOptions" :clone="onClone">
            <li v-for="(component, index) in components1" :key="index" class="collection-item">
              <i :class="getIcon(component.type)"></i> {{component.label}}
            </li>
          </draggable>
          <div class="form-title mt-36">其它字段</div>
          <draggable element="ul" :list="components2" class="form-type clearfix dragArea" :options="componentsOptions" :clone="onClone">
            <li v-for="(component, index) in components2" :key="index" class="collection-item">
              <i :class="getIcon(component.type)"></i> {{component.label}}
            </li>
          </draggable>
        </div>
        <div class="centerForm left">
          <div class="title" @click="dialogFormVisible = true">{{dropForm.title}}</div>
          <el-dialog width="30%" title="修改名称" :visible.sync="dialogFormVisible">
            <div>
              <el-input v-model="dropForm.title"></el-input>
            </div>
            <div slot="footer" class="dialog-footer">
              <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
          </el-dialog>
          <draggable element="ul" data-collapsible="accordion" :list="dropForm.formItems" :class="['collapsible drop-area', !dropForm.formItems.length ? 'empty' : '']" :options="formOptions" @change="log" :move="onMove" @start="isDragging=true" @end="isDragging=false" data-content="Drag and drop your fields here">
            <div v-if="dropForm.formItems.length==0" class="inner">
              <div class="inner-no">
                <i class="el-icon-menu"></i>
                点击或拖动左侧组件创建表单
              </div>
            </div>
            <!-- <div v-else> -->
            <div v-else v-for="(item, index) in dropForm.formItems" :key="index" class="list active" @click.stop="listClick(index)" @mouseover.stop="itemOver(index)" @mouseout.stop="itemOut(-1)">
              <div class="icon-action" :class="{'active':index==curIndex || index==curHover}">
                <i class="el-icon-circle-plus add" @click.stop="addItem(item, index)"></i>
                <i class="el-icon-remove remove" @click.stop="removeItem(item, index)"></i>
              </div>
              <div v-if="item.type == 'number'" class="item">
                <div class="label">{{item.label}}</div>
                <input class="value" type="number">
              </div>
              <div v-else-if="['file'].includes(item.type)" class="item">
                <br>
                <input class="value" type="checkbox" :id="item.name + '-multiple'" :checked="item.multiple" @click.stop="item.multiple = !item.multiple" />
                <label class="label" :for="item.name + '-multiple'">Multiple</label>
              </div>

              <div v-else-if="['range'].includes(item.type)" class="item">
                <div class="cover"></div>
                <div class="input-field">
                  <input class="value" :id="item.name + '-label'" type="number" v-model.number="item.values.min">
                  <label class="label active" :for="item.name + '-label'">Min</label>
                </div>

                <div class="input-field">
                  <input class="label" :id="item.name + '-label'" type="number" v-model.number="item.values.max">
                  <label class="label active" :for="item.name + '-label'">Max</label>
                </div>
              </div>

              <div v-else-if="['text', 'password', 'email'].includes(item.type)" class="item">
                <div class="cover"></div>
                <div class="label">{{item.label}}</div>
                <input type="text" class="value" />
              </div>
              <div v-else-if="['separate'].includes(item.type)" class="item">
                <div class="cover"></div>
                <div class="label">{{item.label}}</div>
              </div>
              <div v-else-if="['date'].includes(item.type)">
                <div class="cover"></div>
                <div class="label">{{item.label}}</div>
                <el-date-picker type="date" placeholder="选择日期">
                </el-date-picker>
              </div>
              <div v-else-if="['time'].includes(item.type)" class="item">
                <div class="cover"></div>
                <div class="label">{{item.label}}</div>
                <el-time-select placeholder="选择时间"></el-time-select>
              </div>
              <div v-else-if="['textarea'].includes(item.type)" class="item">
                <div class="cover"></div>
                <div class="label">{{item.label}}</div>
                <el-input type="textarea" :rows="3"></el-input>
              </div>
              <div v-else-if="item.type == 'switch'" class="item">
                <div class="cover"></div>
                <div class="input-field">
                  <input class="value" :id="item.name + '-labelActive'" type="text" v-model="item.labelActive">
                  <label class="active label" :for="item.labelActive + '-labelActive'">Label active</label>
                </div>
                <div class="input-field">
                  <input class="value" :id="item.name + '-labelInactive'" type="text" v-model="item.labelInactive">
                  <label class="active label" :for="item.name + '-labelInactive'">Label inactive</label>
                </div>
              </div>
              <div v-else-if="['radio'].includes(item.type)" class="item">
                <div class="cover"></div>
                <label>{{item.label}}</label>
                <!-- <draggable element="ul" :list="item.values" class="collection" :options="{group:{name:'item.values'}}"> -->
                <div>
                  <el-radio-group v-model="check.checkRadio">
                    <el-radio v-for="(option, index) in item.values" :key="index" :label="option.label">{{option.value}}</el-radio>
                  </el-radio-group>
                </div>
                <!-- </draggable> -->
              </div>
              <div v-else-if="['checkbox'].includes(item.type)" class="item">
                <div class="cover"></div>
                <label>{{item.label}}</label>
                <!-- <draggable element="ul" :list="item.values" class="collection" :options="{group:{name:'item.values'}}"> -->
                <div>
                  <el-checkbox-group v-model="check.checkBox">
                    <el-checkbox v-for="(option, index) in item.values" :key="index" :label="option.label">{{option.value}}</el-checkbox>
                  </el-checkbox-group>
                </div>
                <!-- </draggable> -->
              </div>
              <div v-else class="item">
                <div class="cover"></div>
                <div class="label">{{item.label}}</div>
                <el-select v-model="check.checkRadio" clearable placeholder="请选择">
                  <el-option v-for="(options, index) in item.values" :key="index" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>

          </draggable>
        </div>
        <div class="rightForm right">
          <div class="form-title">表单属性</div>
          <div class="inner">
            <div>
              <div v-if="curIndex == -1" class="no-text">
                <i class="el-icon-warning"></i> 没有选择字段
              </div>
              <div v-else>
                <label for="">字段名称</label>
                <div v-if="['text','textarea','number','date','time'].includes(dropForm.formItems[curIndex].type)">
                  <el-input size="small" v-model="dropForm.formItems[curIndex].label" placeholder="请输入表达名"></el-input>
                </div>
                <div v-if="['separate'].includes(dropForm.formItems[curIndex].type)">
                  <el-input type="textarea" :rows="2" v-model="dropForm.formItems[curIndex].label"></el-input>
                </div>
                <div v-if="['radio','select'].includes(dropForm.formItems[curIndex].type)">
                  <el-input type="textarea" size="small" v-model="dropForm.formItems[curIndex].label" placeholder="请输入表达名"></el-input>
                  <div>选择项</div>
                  <el-radio-group v-model="check.checkRadio">
                    <el-radio v-for="(option, index) in dropForm.formItems[curIndex].values" :key="index" :label="option.label">
                      <el-input size="small" v-model="option.value"></el-input>
                    </el-radio>
                  </el-radio-group>
                </div>
                <div v-if="dropForm.formItems[curIndex].type == 'checkbox'">
                  <el-input type="textarea" size="small" v-model="dropForm.formItems[curIndex].label" placeholder="请输入表达名"></el-input>
                  <div>选择项</div>
                  <el-checkbox-group v-model="check.checkBox">
                    <el-checkbox v-for="(option, index) in dropForm.formItems[curIndex].values" :key="index" :label="option.label">
                      <el-input size="small" v-model="option.value"></el-input>
                    </el-checkbox>
                  </el-checkbox-group>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PreviewForm from "./PreviewForm";
import draggable from "vuedraggable";
import { addForm, getFormById } from "api/form";
export default {
  components: {
    draggable,
    PreviewForm
  },
  data() {
    return {
      components: [
        {
          label: "单行文本",
          type: "text",
          id: 1
        },
        {
          label: "多行文本",
          type: "textarea",
          id: 2
        },
        {
          label: "数字框",
          type: "number",
          index: 3
        },
        {
          label: "单选框",
          type: "radio",
          index: 4,
          values: [
            {
              label: "radio-1",
              value: "选项一",
              checked: false
            },
            {
              label: "radio-2",
              value: "选项二",
              checked: false
            },
            {
              label: "radio-3",
              value: "选项三",
              checked: false
            }
          ]
        },
        {
          label: "多选框",
          type: "checkbox",
          index: 5,
          values: [
            {
              label: "Option 1",
              value: "option-1",
              selected: false
            },
            {
              label: "Option 2",
              value: "option-2",
              selected: false
            },
            {
              label: "Option 3",
              value: "option-3",
              selected: false
            }
          ]
        },
        {
          label: "下拉框",
          type: "select",
          multiple: false,
          index: 6,
          values: [
            {
              label: "Option-1",
              value: "option-1",
              selected: false
            },
            {
              label: "Option-2",
              value: "option-2",
              selected: false
            },
            {
              label: "Option-3",
              value: "option-3",
              selected: false
            }
          ]
        },
        {
          label: "分隔符",
          type: "separate",
          index: 7
        },
        {
          label: "时间",
          type: "time",
          index: 8
        },
        {
          label: "日期",
          type: "date",
          index: 8
        }
      ],
      components1: [
        {
          label: "姓名",
          type: "text"
        },
        {
          label: "地址",
          type: "textarea"
        },
        {
          label: "电话",
          type: "number"
        },
        {
          label: "邮箱",
          type: "text"
        },
        {
          label: "证件号/卡号",
          type: "text"
        },
        {
          label: "网址",
          type: "text"
        }
      ],
      components2: [
        {
          label: "文章",
          type: "textarea"
        }
      ],
      icons: {
        checkbox: "el-icon-tickets",
        "checkbox-group": "mdi mdi-checkbox-multiple-marked-outline",
        "radio-group": "mdi mdi-checkbox-multiple-marked-circle-outline",
        text: "mdi mdi-textbox",
        textarea: "mdi mdi-file-document-box",
        select: "mdi mdi-menu",
        file: "mdi mdi-file",
        date: "mdi mdi-calendar",
        switch: "mdi mdi-toggle-switch",
        range: "mdi mdi-ray-vertex"
      },
      dropForm: {
        id: 1,
        title: "表单名称",
        formItems: []
      },
      curIndex: -1,
      curHover: -1,
      check: {
        checkRadio: "",
        checkBox: []
        // checkSelected: ""
      },
      dialogFormVisible: false,
      dialogPreview: false,
      isDragging: false,
      delayedDragging: false
    };
  },
  methods: {
    log(evt) {
      console.log(evt);
    },
    onMove({ relatedContext, draggedContext }) {
      // const relatedElement = relatedContext.element;
      // const draggedElement = draggedContext.element;
      // return;
      // (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed;
    },
    onClone(el) {
      var input = JSON.parse(JSON.stringify(el));
      return input;
    },
    getIcon(type) {
      return this.icons[type];
    },
    listClick(index) {
      this.curIndex = index;
    },
    itemOver(index) {
      this.curHover = index;
    },
    itemOut(index) {
      this.curHover = index;
    },
    addItem(item, index) {
      this.dropForm.formItems.splice(index, 0, item);
    },
    removeItem(item, index) {
      this.dropForm.formItems.splice(index, 1);
    },
    save() {
      let _this = this;
      addForm(this.dropForm, res => {
        if (res.status === 200) {
          _this.$message({
            message: "保存成功",
            type: "success"
          });
          _this.$router.push("/main");
        }
      });
    },
    back() {
      this.$router.push("/main");
    }
  },
  beforeCreate: function() {},
  created: function() {
    let _this = this;
    if (this.$route.params.id != 1) {
      getFormById(this.$route.params.id, res => {
        if (res.status === 200) {
          _this.dropForm.id = res.data._id;
          _this.dropForm.title = res.data.title;
          _this.dropForm.formItems = res.data.form;
        }
      });
    } else {
      _this.dropForm.id = 1;
      _this.dropForm.title = "表单名称";
      _this.dropForm.formItems = [];
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      // drag({
      //   dragArea: "dragArea",
      //   dropArea: "dropArea"
      // });
    });
  },
  computed: {
    componentsOptions() {
      return {
        group: {
          name: "people",
          pull: "clone",
          put: false
        }
      };
    },
    formOptions() {
      return {
        group: {
          name: "people"
        }
      };
    }
  },
  watch: {
    id() {},
    isDragging(newValue) {
      if (newValue) {
        this.delayedDragging = true;
        return;
      }
      this.$nextTick(() => {
        this.delayedDragging = false;
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "~common/less/variable";

.form-wrap {
  .mt-36 {
    margin-top: 36px;
  }
  .header {
    height: 55px;
    line-height: 55px;
    width: 100%;
    padding: 0 40px;
    box-sizing: border-box;
    color: @color-a;
    background: rgba(255, 255, 255, 0.6);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-bottom: 1px solid #c1c1c1;
    .logo {
      float: left;
      width: 100px;
      height: 100%;
      img {
        height: 55px;
      }
    }
    .nav {
      float: right;
      margin-right: 20px;
      a {
        margin: 0 20px;
        color: @color-a;
        text-decoration: none;
        &:hover {
          color: rgb(64, 153, 226);
        }
      }
    }
  }
  .content {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    .content-action {
      height: 50px;
      line-height: 50px;
      .action-left {
        float: left;
      }
      .action-right {
        float: right;
      }
    }
    .content-drag {
      .leftForm {
        width: 250px;
        .form-title {
          padding: 5px;
          border-top: 1px solid #bfbfbf;
          border-left: 1px solid #bfbfbf;
          border-right: 1px solid #bfbfbf;
          border-bottom-width: 1px;
          border-bottom-style: solid;
          border-bottom-color: #90c0f1;
        }
        .form-type {
          border-left: 1px solid #bfbfbf;
          // border-top: 1px solid #bfbfbf;
          li {
            float: left;
            width: 33.33333333%;
            padding: 15px 0;
            text-align: center;
            font-size: 14px;
            color: #8e8787;
            box-sizing: border-box;
            border-right: 1px solid #bfbfbf;
            border-bottom: 1px solid #bfbfbf;
            i {
              display: block;
              height: 15px;
              line-height: 15px;
              text-align: center;
            }
            &:hover {
              color: #fff;
              background-color: #409eff;
            }
          }
        }
      }
      .centerForm {
        width: 500px;
        margin-left: 46px;
        border: 1px solid #bfbfbf;
        .collapsible {
          width: 100%;
          min-height: 500px;
        }
        .title {
          height: 50px;
          line-height: 50px;
          padding: 10px;
          font-size: 24px;
          background-color: #409eff;
          color: #fff;
          border-bottom-width: 1px;
          border-bottom-style: solid;
          border-bottom-color: #90c0f1;
        }
        .inner {
          padding: 40px;
          .inner-no {
            background-color: #f7f7f7;
            font-size: 20px;
            text-align: center;
            padding: 40px;
            border-radius: 8px;
            i {
              color: #409eff;
            }
          }
        }
        .drop-area {
          padding: 10px;
          font-size: 14px;
          box-sizing: border-box;
          .list {
            position: relative;
            margin-bottom: 7px;
            border: 1px solid #fff;
            border-radius: 5px;
            &.active {
              background: #ebedee;
            }
            &:hover {
              border: 1px dashed #ccc;
              border-radius: 5px;
              background-color: #ebedee;
            }
            .item {
              position: relative;
              cursor: pointer;
              padding: 3px;
              .label {
                padding-bottom: 5px;
              }
              .value {
                display: inline-block;
                height: 20px;
              }
              .el-radio,
              .el-checkbox {
                margin: 5px 0;
                display: block;
              }
            }
            .cover {
              position: absolute;
              top: 0;
              left: 0;
              height: 100%;
              width: 100%;
              z-index: 2;
            }
            .icon-action {
              display: none;
              position: absolute;
              bottom: -11px;
              right: 5px;
              z-index: 10;
              &.active {
                display: block;
              }
              i {
                font-size: 18px;
                &.add {
                  color: #39dc39;
                }
                &.remove {
                  color: #e26161;
                }
              }
            }
          }
        }
      }
      .rightForm {
        width: 350px;
        min-height: 570px;
        border: 1px solid #bfbfbf;
        .form-title {
          padding: 5px;
          border-bottom-width: 1px;
          border-bottom-style: solid;
          border-bottom-color: #90c0f1;
        }
        .inner {
          padding: 10px;
          font-size: 14px;
          label {
            line-height: 30px;
          }
          .no-text {
            background-color: #f7f7f7;
            font-size: 20px;
            text-align: center;
            padding: 40px;
            border-radius: 8px;
            i {
              color: #409eff;
            }
          }
          .el-radio,
          .el-checkbox {
            display: block;
            margin: 4px 0;
          }
          .el-checkbox + .el-checkbox {
            margin-left: 0;
          }
        }
      }
    }
  }
}
</style>

