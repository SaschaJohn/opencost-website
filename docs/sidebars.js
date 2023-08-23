/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    'index',
    {
      type: 'category',
      label: 'Installation',
      items: [
        {
          type: 'autogenerated',
          dirName: 'installation',
        },
      ],
    },
    {
      type: 'category',
      label: 'Configuration',
      items: [
        {
          type: 'autogenerated',
          dirName: 'configuration',
        },
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      items: [
        {
          type: 'autogenerated',
          dirName: 'integrations',
        },
      ],
    },
    'specification',
    'community',
    'FAQ',
  ],
};

module.exports = sidebars;