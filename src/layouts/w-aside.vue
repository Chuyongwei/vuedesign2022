<template>
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <!-- 导航栏第一层 -->
      <el-submenu
        v-for="item in items"
        :key="item.index"
        :index="item.index + ''"
      >
        <template slot="title"
          ><i class="el-icon-message"></i>{{ item.name }}</template
        >
        <!-- 导航栏第二层 -->
        <el-menu-item-group v-for="label in item.children" :key="label.index">
          <!-- 分组 -->
          <template v-if="label.name" slot="title">{{ label.name }}</template>
          <!-- 导航栏第三层 -->
          <div v-for="l in label.items" :key="l.index" :index="l.index">
            <template v-if="l.children">
              <el-submenu :index="l.index">
                <template slot="title">{{ l.name }}</template>
                <el-menu-item
                  v-for="l in l.children"
                  :key="l.index"
                  :index="l.index"
                  >{{ l.name }}</el-menu-item
                >
              </el-submenu>
            </template>
            <template v-else>
              <el-menu-item :index="l.index">{{ l.name }}</el-menu-item>
            </template>
          </div>

          <!-- 导航标签 -->
          <!-- <v-else>
                <el-menu-item
                  v-for="l in label.items"
                  :key="l.index"
                  :index="l.index"
                  >{{ l.name }}</el-menu-item
                >
              </v-else> -->
        </el-menu-item-group>
      </el-submenu>
      <!--
          <el-submenu index="1">
            <div slot="title"><i class="el-icon-message"></i>导航一</div>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          -->

      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>导航三</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="3-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="3-4">
          <template slot="title">选项4</template>
          <el-menu-item index="3-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          index: 1,
          name: "导航一",
          children: [
            {
              index: 1,
              name: "分组一",
              items: [
                {
                  index: "1-1",
                  name: "选项1",
                },
                {
                  index: "1-2",
                  name: "选项2",
                },
              ],
            },
            {
              index: 2,
              name: "分组二",
              items: [
                {
                  index: "2-1",
                  name: "选项3",
                },
                {
                  index: "2-2",
                  name: "选项4",
                  children: [
                    {
                      index: "2-2-1",
                      name: "选项4-1",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>