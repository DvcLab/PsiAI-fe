<script>
import Popper from 'vue-popperjs'
import 'vue-popperjs/dist/vue-popper.css'
export default {
  components: { Popper },
  props: {
    users: {
      type: Array,
      default: () => []
    }
  },
}
</script>

<template>
  <div class="avatar-group">

    <popper v-for="user in users" :key="user.userId" trigger="hover" :options="{ placement: 'right' }">

      <a slot="reference" href="#" class="proj-avatar-popover">
        <img
          class="avatar"
          :src="user.imgUrl"
          alt="avatar"
        />
      </a>

      <div class="popper text-left">
        <div class="card mb-0" style="box-shadow: unset">
          <div class="card-body p-3">

            <div class="media align-items-center">
              <img
                :src="user.imgUrl"
                class="mr-3 avatar-lg rounded-circle"
                alt="avatar"
              />
              <div class="media-body">
                <h5 class="mt-1 mb-0">{{ user.nickname }}</h5>
                <h6 class="font-weight-normal mt-1 mb-1">
                  <a href>@{{ user.userId }}</a>
                </h6>
                <div v-if="user.skills" style="min-width: 10rem;">
                  <label v-for="skill in (user.skills.length < 4 ? user.skills : user.skills.slice(0,3))" :key="skill" class="badge badge-soft-primary ml-1">
                    {{ skill }}
                  </label>
                </div>
              </div>
            </div>

            <slot name="detail"></slot>

            <slot name="footer"></slot>

          </div>
        </div>
      </div> 
    </popper>
  </div>
</template>
<style scoped>
.avatar-group {
  display: inline-block;
}

.avatar {
  width: 1.8rem;
  height: 1.8rem;
  border: 0px solid #f1f1f1;
  border-radius: 50%;
  margin-left: -0.8rem;
  box-shadow: 0.1rem 0.1rem 0.1rem rgba(75, 75, 90, 0.05);
}

.avatar:hover {
  transform: scale(1.2, 1.2);
}

.proj-avatar-popover {
  width: 1.8rem;
  height: 1.8rem;
}
</style>
