/**
 * Copyright © 2019 Johnson & Johnson
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { graphql } from 'gatsby';
import { Page } from '@bodiless/gatsby-theme-bodiless';
import Layout from '../components/Layout';
import { SectionMargin } from '../components/Product';
import {
  ProductListingTitle,
  ProductListingImage,
  ProductListingFlexBox,
} from '../components/ProductListing';

export default props => (
  <Page {...props}>
    <Layout>
      <SectionMargin>
        <ProductListingTitle />
      </SectionMargin>
      <SectionMargin>
        <ProductListingImage />
      </SectionMargin>
      <SectionMargin>
        <ProductListingFlexBox nodeKey="product_listing_touts" />
      </SectionMargin>
    </Layout>
  </Page>
);

export const query = graphql`
  query($slug: String!) {
    ...PageQuery,
    ...SiteQuery
  }
`;
