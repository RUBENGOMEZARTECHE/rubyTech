import type { Schema, Struct } from '@strapi/strapi';

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    keywords: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    ogImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface SpecsTech extends Struct.ComponentSchema {
  collectionName: 'components_specs_teches';
  info: {
    displayName: 'tech';
  };
  attributes: {
    battery: Schema.Attribute.String;
    processor: Schema.Attribute.String;
    ram: Schema.Attribute.String;
    screen: Schema.Attribute.String;
    storage: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.seo': SharedSeo;
      'specs.tech': SpecsTech;
    }
  }
}
