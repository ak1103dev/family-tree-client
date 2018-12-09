<template>
  <el-row>
    <el-col :span="20" :offset="2">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <el-button
            style="float: right; padding: 3px 0"
            type="text"
            icon="el-icon-edit"
          >
            Edit
          </el-button>
          <img :src="profile.profileImage" width="100" height="100" />
          <div style="display:inline-block; margin-left:10px;">
            <div>Name: {{ profile.name }}</div>
            <div>Nickname: {{ profile.nickname }}</div>
            <div>Generation: {{ profile.generation }}</div>
            <div>Gender: {{ profile.gender }}</div>
          </div>
        </div>
        <div>
          <div>Birthdate: {{ profile.birthdate }}</div>
          <div>Father: {{ profile.father }}</div>
          <div>Mother: {{ profile.mother }}</div>
          <div>Contacts:</div>
          <div>
            <div class="contact-type">Phone Number:</div>
            <div
              class="contact-value"
              v-for="item in profile.contacts.phoneNumber"
              :key="item.value"
            >
              <div>{{ item.value }}</div>
            </div>
          </div>
          <div>
            <div class="contact-type">Email:</div>
            <div
              class="contact-value"
              v-for="item in profile.contacts.email"
              :key="item.value"
            >
              <div>{{ item.value }}</div>
            </div>
          </div>
          <div>
            <div class="contact-type">Address:</div>
            <div
              class="contact-value"
              v-for="item in profile.contacts.address"
              :key="item.value"
            >
              <div>{{ item.value }}</div>
            </div>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
.contact-type {
  margin-left: 10px;
}
.contact-value {
  margin-left: 20px;
}
</style>

<script>
export default {
  data() {
    return {
      profile: {
        profileImage:
          "https://cdn0.iconfinder.com/data/icons/superuser-web-kit/512/686909-user_people_man_human_head_person-512.png",
        name: "Yummy Hamburger",
        nickname: "Yum",
        generation: "A",
        gender: "male",
        birthdate: "01 January 1990",
        father: "Guo Jing",
        mother: "Huang Rong",
        contacts: {
          email: [
            {
              type: "email",
              value: "example@example.com"
            },
            {
              type: "email",
              value: "gg@example.com"
            }
          ],
          phoneNumber: [
            {
              type: "phoneNumber",
              value: "(+66) 0801234567"
            }
          ],
          address: [
            {
              type: "address",
              value: "99/99 Payathai Bangkok Thailand"
            }
          ]
        },
        note: "no tell"
      }
    };
  },
  mounted() {
    console.log("mounted");
  }
};
</script>
