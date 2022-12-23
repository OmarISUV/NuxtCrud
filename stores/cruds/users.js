export const Users = {
  state: () => ({
    // Set context
    table: {
        data: [],
    },
  
    dataForm: {},

   
  }),

  actions: {
    /**
     * Function to reload user table
     *
     * 
     */
    async reloadTable() {
      
      // Make request
      const originalResponse = await useFetch('https://agtz6r5ple.execute-api.us-east-1.amazonaws.com/users')
      const response = originalResponse.data.value
      if (response.success) {
        this.table.data = response.data.users;
      }
    },

    /**
     * Function to reload data format Customer supports
     *
     * 
     */
    async reloadDataForm(id = null) {
      
      this.dataForm = {};

      if (id) {
        // Config for request
        const config = {
          method: 'POST',
          url: `/api/panel/customer/support/get/data`,
          log: this.log,
          data: { id: id },
        };

        // Make request
        const response = await request(config);
        this.dataForm = response.data;
      }

      this.ctx.closeElLoading();
    },

    /**
     * Function to create Customer supports
     *
     * 
     */
    async create() {
      this.ctx.openElLoading();

      let data = this.$state.dataForm;

      const config = {
        method: 'POST',
        url: `/api/panel/customer/support/create`,
        log: this.log,
        data: data,
      };

      const response = await request(config);

      if (response.success) {
        this.ctx.notify({
          title: 'Solicitud exitosa',
          message: response.message,
          type: 'success',
        });
        this.reloadTable();
        this.reloadDataForm();
        this.ctx.system.modal.show = false;
      } else {
        this.ctx.notify({
          title: 'Solicitud denegada',
          message: response.message,
          type: 'error',
        });
      }

      this.ctx.closeElLoading();

      return response.success;
    },

    /**
     * Function to update Customer supports
     *
     * 
     */
    async update() {
      this.ctx.openElLoading();

      let data = this.$state.dataForm;

      const config = {
        method: 'POST',
        url: `/api/panel/customer/support/update`,
        log: this.log,
        data: data,
      };

      const response = await request(config);

      if (response.success) {
        this.ctx.notify({
          title: 'Solicitud exitosa',
          message: response.message,
          type: 'success',
        });
        this.reloadTable();
        this.reloadDataForm();
        this.ctx.system.modal.show = false;
      } else {
        this.ctx.notify({
          title: 'Solicitud denegada',
          message: response.message,
          type: 'error',
        });
      }

      this.ctx.closeElLoading();

      return response.success;
    },

    /**
     * Function to delete Customer supports
     *
     * @param Integer id
     * 
     */
    async delete(id) {
      this.ctx.openElLoading();

      id = parseInt(id);

      const config = {
        method: 'DELETE',
        url: `/api/panel/customer/support/delete/${id}`,
        log: this.log,
      };

      const response = await request(config);

      if (response.success) {
        this.ctx.notify({
          title: 'Solicitud exitosa',
          message: response.message,
          type: 'success',
        });
        this.reloadTable();
        this.ctx.system.modal.show = false;
      } else {
        this.ctx.notify({
          title: 'Solicitud denegada',
          message: response.message,
          type: 'error',
        });
      }

      this.ctx.closeElLoading();

      return response.success;
    },
  },

  getters: {
    getTypeUsers() {
      return this.$state.typeUsers;
    },
    getUsers() {
      return this.$state.users;
    },
    userCreatedForm() {
      return this.$state.typeUsers == usersTeam
        ? 'TeamUserCreate'
        : 'TeamUserCreate';
    },
    userEditForm() {
      return this.$state.typeUsers == usersTeam
        ? 'TeamUserUpdateRol'
        : 'TeamUserUpdateRol';
    },
    userTransferForm() {
      return this.$state.typeUsers == usersTeam
        ? 'TeamUserTransfer'
        : 'BusinessUserTransfer';
    },
  },
};
