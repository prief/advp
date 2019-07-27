<template>
  <div>
    <a-form layout="horizontal" :form="form">
      <a-form-item
        label="付款账户"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
      >
        {{ step.payAccount }}
      </a-form-item>
      <a-form-item
        label="付款密码"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
      >
        <a-input
          v-decorator="[
            'password',
            {
              initialValue: step.payAccount,
              rules: [
                {
                  required: true,
                  message: '付款密码',
                },
              ],
            },
          ]"
          type="password"
          placeholder="付款密码"
        ></a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" @click="next">提交</a-button>
        <a-button style="margin-left:8px" @click="prev">上一步</a-button>
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
    prev() {
      this.$router.push('/form/step-form/info');
    },
    next() {
      const { form, $store, step } = this;
      form.validateFields((err, values) => {
        if (!err) {
          $store.dispatch({
            type: 'form/submitStepForm',
            paylod: { ...step, ...values },
          });
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
