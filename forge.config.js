

module.exports = {
  packagerConfig: {
    icon: './src/assets/close-icon', // EJEMPLO DE ÍCONO !E
  },
  makers: [
    {
      name: '@electron-forge/maker-squirrel', // INSTALADOR PARA WINDOWS !E
      config: {},
    },
    {
      name: '@electron-forge/maker-zip', // INSTALADOR PARA MAC !E
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb', // INSTALADOR DEB PARA LINUX !E
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm', // INSTALADOR RPM PARA LINUX !E
      config: {},
    },
  ],
};
