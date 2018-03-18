<template>
  <div class="form">
    <div class="head"></div>
    <div class="content">
      <div class="title">{{form.title}}</div>
      <div class="inner">
        <ul>
          <li v-for="(item, index) in form.formItems" :key="index" class="list active">
            <div v-if="item.type == 'number'" class="item">
              <div class="label" :for="item.type">{{item.label}}</div>
              <input class="value" type="number">
            </div>
            <div v-if="['file'].includes(item.type)" class="item">
              <br>
              <input class="value" type="checkbox" :id="item.name + '-multiple'" :checked="item.multiple" @click.stop="item.multiple = !item.multiple" />
              <label class="label" :for="item.name + '-multiple'">Multiple</label>
            </div>

            <div v-if="item.type == 'range'" class="item">
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

            <div v-if="['text', 'password', 'email'].includes(item.type)" class="item">
              <div class="cover"></div>
              <div class="label">{{item.label}}</div>
              <input type="text" class="value" />
            </div>
            <div v-if="['separate'].includes(item.type)" class="item">
              <div class="cover"></div>
              <div class="label">{{item.label}}</div>
            </div>
            <div v-if="['date'].includes(item.type)">
              <div class="cover"></div>
              <div class="label">{{item.label}}</div>
              <el-date-picker type="date" placeholder="选择日期">
              </el-date-picker>
            </div>
            <div v-if="['time'].includes(item.type)" class="item">
              <div class="cover"></div>
              <div class="label">{{item.label}}</div>
              <el-time-select placeholder="选择时间"></el-time-select>
            </div>
            <div v-if="['textarea'].includes(item.type)" class="item">
              <div class="cover"></div>
              <div class="label">{{item.label}}</div>
              <el-input type="textarea" row="3"></el-input>
            </div>
            <div v-if="item.type == 'switch'" class="item">
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

            <div v-if="['radio'].includes(item.type)" class="item">
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
            <div v-if="['checkbox'].includes(item.type)" class="item">
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
            <div v-if="item.type == 'select'" class="item">
              <div class="cover"></div>
              <div class="label">{{item.label}}</div>
              <el-select v-model="check.checkRadio" clearable placeholder="请选择">
                <el-option v-for="(options, index) in item.values" :key="index" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["form"],
  data() {
    return {
      check: {
        checkRadio: "",
        checkBox: []
        // checkSelected: ""
      }
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.form{
  width: 450px;
  margin: 0 auto;
  border: 1px solid rgb(38, 184, 228);
  .head{
    height: 30px;
    background-color: #25a1c7;
  }
  .content{
    padding: 13px;
  }
}
</style>
