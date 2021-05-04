const Query = {
  products: (_parent, _args, context) => {
    const { Product } = context.dataSources;

    return Product.getList();
  },
};

export default { Query };
