<script lang="ts" setup>
import { ref } from 'vue'
import { User, Upload, OfficeBuilding, Phone } from '@element-plus/icons-vue'
import type { UserVO对象 } from '@/api/modules/cup-user/_model'

const porps = defineProps({
  data: {
    required: true,
    type: Object,
  },
})

/** 岗位 */
const postName = computed(() => {
  return porps?.data?.postName?.split(',') ?? []
})

/** 角色 */
const roleName = computed(() => {
  return porps?.data?.roleName?.split(',') ?? []
})

/** 是否显示裁剪弹窗 */
const visible = ref(false)

/** 打开图片裁剪 */
function openCropper() {
  visible.value = true
}
/** 头像裁剪完成回调 */
function onCrop(result: string) {
  visible.value = false
  // emit('done', { avatar: result })
  /* const loading = EleMessage.loading({
      message: '请求中..',
      plain: true
    });
    updateUserInfo({ avatar: result })
      .then((data) => {
        loading.close();
        visible.value = false;
        EleMessage.success('修改成功');
        emit('done', data);
      })
      .catch((e) => {
        loading.close();
        EleMessage.error(e.message);
      }); */
}
</script>

<template>
  <ele-card class="profile-center">
    <div class="info-user">
      <div class="info-user-avatar" @click="openCropper">
        <el-avatar :size="100" :src="data.avatar" />
        <el-icon class="info-user-avatar-icon">
          <Upload style="stroke-width: 3;" />
        </el-icon>
      </div>
      <div>
        <el-text style="margin-top: 5px;font-size: 24px;">
          {{ data.name }}
        </el-text>
      </div>
    </div>
    <div class="info-list">
      <div class="info-item">
        <el-icon>
          <EnvironmentOutlined />
        </el-icon>
        <div class="info-item-text">
          所属租户： {{ data.tenantName }}
        </div>
      </div>
      <div class="info-item">
        <el-icon>
          <UserOutlined />
        </el-icon>
        <div class="info-item-text">
          部门： {{ data.deptName }}
        </div>
      </div>
      <div class="info-item">
        <el-icon>
          <UserOutlined />
        </el-icon>
        <div class="info-item-text">
          岗位： <el-tag v-for="item in postName" :key="item" class="m-b-[5px] m-r-[5px]">
            {{ item }}
          </el-tag>
        </div>
      </div>
      <div class="info-item">
        <el-icon>
          <CityOutlined style="transform: translateY(-1px);" />
        </el-icon>
        <div class="info-item-text">
          角色： <el-tag v-for="item in roleName" :key="item" class="m-b-[5px] m-r-[5px]">
            {{ item }}
          </el-tag>
        </div>
      </div>

      <div class="info-item">
        <el-icon>
          <TagOutlined style="transform: translateY(-1px);" />
        </el-icon>
        <div class="info-item-text">
          生日：{{ data.birthday }}
        </div>
      </div>
      <div class="info-item">
        <el-icon>
          <TagOutlined style="transform: translateY(-1px);" />
        </el-icon>
        <div class="info-item-text">
          创建时间：{{ data.createTime }}
        </div>
      </div>
      <div class="info-item">
        <el-icon>
          <TagOutlined style="transform: translateY(-1px);" />
        </el-icon>
        <div class="info-item-text">
          更新时间：{{ data.updateTime }}
        </div>
      </div>
    </div>

    <!-- <EleCropperModal
      v-model="visible"
      :src="data.avatar"
      :options="{
        aspectRatio: 1,
        autoCropArea: 1,
        viewMode: 1,
        dragMode: 'move',
      }"
      :modal-props="{ destroyOnClose: true }"
      @done="onCrop"
    /> -->
  </ele-card>
</template>

<style lang="scss" scoped>
.profile-center {
  .el-form-item {
    margin-bottom: 0;
  }

  .info-user {
    box-sizing: border-box;
    padding-top: 8px;
    text-align: center;

    .info-user-avatar {
      position: relative;
      display: inline-block;
      line-height: 0;
      cursor: pointer;

      .info-user-avatar-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 2;
        display: none;
        font-size: 30px;
        color: #fff;
        transform: translate(-50%, -50%);
      }

      &::after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        content: "";
        background-color: transparent;
        border-radius: 50%;
        transition: background-color 0.3s;
      }

      &:hover {
        .info-user-avatar-icon {
          display: block;
        }

        &::after {
          background-color: rgb(0 0 0 / 40%);
        }
      }
    }
  }

  .info-list {
    margin: 35px 0 24px;

    .info-item {
      display: flex;
      align-items: center;

      & > .el-icon {
        font-size: 16px;
      }

      .info-item-text {
        box-sizing: border-box;
        flex: 1;
        padding-left: 8px;
      }

      & + .info-item {
        margin-top: 10px;
      }
    }
  }
}
</style>
