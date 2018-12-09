<template>
  <div>
    <h1>List</h1>
    <el-row>
      <el-col v-for="gen in list" :key="gen.generation" :span="24">
        <h2>Generation {{ gen.generation }}</h2>
        <el-row :gutter="10">
          <el-col
            v-for="item in gen.profiles"
            :key="item.name"
            :span="3"
            style="margin-bottom: 10px"
          >
            <el-card :body-style="{ padding: '0px' }" shadow="hover">
              <img :src="item.profileImage" class="image" />
              <div style="padding: 14px; text-align: center;">
                <div>{{ item.name }}</div>
                <div>{{ item.nickname }}</div>
                <div>
                  <el-button
                    type="text"
                    @click="seeProfile(item);"
                    class="button"
                  >
                    See Profile
                  </el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<style>
.image {
  width: 100%;
  display: block;
}
</style>

<script>
export default {
  data() {
    return {
      list: [
        {
          generation: "A",
          profiles: [
            {
              name: "Yummy Hamburger",
              profileImage:
                "https://cdn0.iconfinder.com/data/icons/superuser-web-kit/512/686909-user_people_man_human_head_person-512.png",
              nickname: "Yum"
            }
          ]
        },
        {
          generation: "B",
          profiles: [
            {
              name: "Yummy Hamburger",
              profileImage:
                "https://cdn0.iconfinder.com/data/icons/superuser-web-kit/512/686909-user_people_man_human_head_person-512.png",
              nickname: "Yum"
            }
          ]
        }
      ]
    };
  },
  methods: {
    seeProfile() {
      this.$router.push({ name: "about" });
    }
  }
};
</script>
