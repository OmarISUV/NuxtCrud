// import { routes } from '@/stores/Router.js';
// import { request } from '@/core/utils/Rest';

export const Users = {
  state: () => ({
    // Set context
    table: {
        data: [],
        paga: 1,
        maxPage: 1,
        itemPerPage: 12,
    },
  
    dataForm: {},

    // Filter Object
    filters: {
        search: '',
    },

  }),

  actions: {
    /**
     * Function to reload Customer supports table
     *
     * @author Dan Reynoso
     */
    async reloadTable() {
      let params = {
        search: this.filters.search,
        itemPerPage: this.table.itemPerPage,
        pageNumber: this.table.paga,
      };

      // Config for request
      const config = {
        method: 'GET',
        url: `/api/panel/customer/support/get/page`,
        log: this.log,
        params,
      };

      // Make request
      const response = await request(config);

      if (response.success) {
        this.table.data = response.data.data;
        this.table.maxPage = response.data.maxPage;
      }
    },

    /**
     * Function to reload data format Customer supports
     *
     * @author Dan Reynoso
     */
    async reloadDataForm(id = null) {
      this.ctx.openElLoading();
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
     * @author Dan Reynoso
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
     * @author Dan Reynoso
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
     * @author Dan Reynoso
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
