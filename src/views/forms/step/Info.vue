<template>
  <div>
    <a-form layout="horizontal" :form="form">
      <a-form-item
        label="付款账户"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
      >
        <a-input
          v-decorator="[
            'payAccount',
            {
              initialValue: step.payAccount,
              rules: [
                {
                  required: true,
                  message: '付款账号',
                },
              ],
            },
          ]"
          placeholder="fukuanzhanghao"
        ></a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" @click="next">下一步</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  data() {
    this.form = this.$form.createForm(this);
    return {
      formItemLayout: {
        labelCol: {
          span: 4,
        },
        wrapperCol: { span: 14 },
      },
    };
  },
  methods: {
    next() {
      const { form, $router, $store } = this;
      form.validateFields((err, values) => {
        if (!err) {
          $store.commit({
            type: 'form/saveStepFormData',
            paylod: values,
          });
          $router.push('/form/step-form/confirm');
        }
      });
    },
  },
  computed: {
    step() {
      return this.$store.state.form.step;
    },
  },
};
</script>

<style></style>
