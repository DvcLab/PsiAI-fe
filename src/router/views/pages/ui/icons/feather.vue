<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'

export default {
  page: {
    title: 'Feather Icons',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: 'Feather Icons',
      items: [
        {
          text: 'Shreyu',
          href: '/',
        },
        {
          text: 'Icons',
          href: '/',
        },
        {
          text: 'Feather Icons',
          active: true,
        },
      ],
    }
  },
}
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <!-- Start row-->

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h5 class="mt-0 mb-1 header-title">Examples</h5>
            <p class="mb-3">
              Use
              <code>&lt;feather type="activity"&gt;&lt;/feather&gt;</code>.
            </p>

            <div class="row icons-list">
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="activity"></feather>
                  <span>activity</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="airplay"></feather>
                  <span>airplay</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="alert-circle"></feather>
                  <span>alert-circle</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="alert-octagon"></feather>
                  <span>alert-octagon</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="alert-triangle"></feather>
                  <span>alert-triangle</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="align-center"></feather>
                  <span>align-center</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="align-justify"></feather>
                  <span>align-justify</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="align-left"></feather>
                  <span>align-left</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="align-right"></feather>
                  <span>align-right</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="anchor"></feather>
                  <span>anchor</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="aperture"></feather>
                  <span>aperture</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="archive"></feather>
                  <span>archive</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="arrow-down-circle"></feather>
                  <span>arrow-down-circle</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="arrow-down-left"></feather>
                  <span>arrow-down-left</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="arrow-down-right"></feather>
                  <span>arrow-down-right</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="arrow-down"></feather>
                  <span>arrow-down</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="arrow-left-circle"></feather>
                  <span>arrow-left-circle</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="arrow-left"></feather>
                  <span>arrow-left</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="arrow-right-circle"></feather>
                  <span>arrow-right-circle</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="arrow-right"></feather>
                  <span>arrow-right</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="arrow-up-circle"></feather>
                  <span>arrow-up-circle</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="arrow-up-left"></feather>
                  <span>arrow-up-left</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="arrow-up-right"></feather>
                  <span>arrow-up-right</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="arrow-up"></feather>
                  <span>arrow-up</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="at-sign"></feather>
                  <span>at-sign</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="award"></feather>
                  <span>award</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="bar-chart-2"></feather>
                  <span>bar-chart-2</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="bar-chart"></feather>
                  <span>bar-chart</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="battery-charging"></feather>
                  <span>battery-charging</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="battery"></feather>
                  <span>battery</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="bell-off"></feather>
                  <span>bell-off</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="bell"></feather>
                  <span>bell</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="bluetooth"></feather>
                  <span>bluetooth</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="bold"></feather>
                  <span>bold</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="book-open"></feather>
                  <span>book-open</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="book"></feather>
                  <span>book</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="bookmark"></feather>
                  <span>bookmark</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="box"></feather>
                  <span>box</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="briefcase"></feather>
                  <span>briefcase</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="calendar"></feather>
                  <span>calendar</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="camera-off"></feather>
                  <span>camera-off</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="camera"></feather>
                  <span>camera</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="cast"></feather>
                  <span>cast</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="check-circle"></feather>
                  <span>check-circle</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="check-square"></feather>
                  <span>check-square</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="check"></feather>
                  <span>check</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="chevron-down"></feather>
                  <span>chevron-down</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="chevron-left"></feather>
                  <span>chevron-left</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="chevron-right"></feather>
                  <span>chevron-right</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="chevron-up"></feather>
                  <span>chevron-up</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="chevrons-down"></feather>
                  <span>chevrons-down</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="chevrons-left"></feather>
                  <span>chevrons-left</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="chevrons-right"></feather>
                  <span>chevrons-right</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="chevrons-up"></feather>
                  <span>chevrons-up</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="chrome"></feather>
                  <span>chrome</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="circle"></feather>
                  <span>circle</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="clipboard"></feather>
                  <span>clipboard</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="clock"></feather>
                  <span>clock</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="cloud-drizzle"></feather>
                  <span>cloud-drizzle</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="cloud-lightning"></feather>
                  <span>cloud-lightning</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="cloud-off"></feather>
                  <span>cloud-off</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="cloud-rain"></feather>
                  <span>cloud-rain</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="cloud-snow"></feather>
                  <span>cloud-snow</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="cloud"></feather>
                  <span>cloud</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="code"></feather>
                  <span>code</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="codepen"></feather>
                  <span>codepen</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="codesandbox"></feather>
                  <span>codesandbox</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="coffee"></feather>
                  <span>coffee</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="columns"></feather>
                  <span>columns</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="command"></feather>
                  <span>command</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="compass"></feather>
                  <span>compass</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="copy"></feather>
                  <span>copy</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="corner-down-left"></feather>
                  <span>corner-down-left</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="corner-down-right"></feather>
                  <span>corner-down-right</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="corner-left-down"></feather>
                  <span>corner-left-down</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="corner-left-up"></feather>
                  <span>corner-left-up</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="corner-right-down"></feather>
                  <span>corner-right-down</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="corner-right-up"></feather>
                  <span>corner-right-up</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="corner-up-left"></feather>
                  <span>corner-up-left</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="corner-up-right"></feather>
                  <span>corner-up-right</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="cpu"></feather>
                  <span>cpu</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="credit-card"></feather>
                  <span>credit-card</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="crop"></feather>
                  <span>crop</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="crosshair"></feather>
                  <span>crosshair</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="database"></feather>
                  <span>database</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="delete"></feather>
                  <span>delete</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="disc"></feather>
                  <span>disc</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="dollar-sign"></feather>
                  <span>dollar-sign</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="download-cloud"></feather>
                  <span>download-cloud</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="download"></feather>
                  <span>download</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="droplet"></feather>
                  <span>droplet</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="edit-2"></feather>
                  <span>edit-2</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="edit-3"></feather>
                  <span>edit-3</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="edit"></feather>
                  <span>edit</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="external-link"></feather>
                  <span>external-link</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="eye-off"></feather>
                  <span>eye-off</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="eye"></feather>
                  <span>eye</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="facebook"></feather>
                  <span>facebook</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="fast-forward"></feather>
                  <span>fast-forward</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="feather"></feather>
                  <span>feather</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="figma"></feather>
                  <span>figma</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="file-minus"></feather>
                  <span>file-minus</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="file-plus"></feather>
                  <span>file-plus</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="file-text"></feather>
                  <span>file-text</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="file"></feather>
                  <span>file</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="film"></feather>
                  <span>film</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="filter"></feather>
                  <span>filter</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="flag"></feather>
                  <span>flag</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="folder-minus"></feather>
                  <span>folder-minus</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="folder-plus"></feather>
                  <span>folder-plus</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="folder"></feather>
                  <span>folder</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="framer"></feather>
                  <span>framer</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="frown"></feather>
                  <span>frown</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="gift"></feather>
                  <span>gift</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="git-branch"></feather>
                  <span>git-branch</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="git-commit"></feather>
                  <span>git-commit</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="git-merge"></feather>
                  <span>git-merge</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="git-pull-request"></feather>
                  <span>git-pull-request</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="github"></feather>
                  <span>github</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="gitlab"></feather>
                  <span>gitlab</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="globe"></feather>
                  <span>globe</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="grid"></feather>
                  <span>grid</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="hard-drive"></feather>
                  <span>hard-drive</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="hash"></feather>
                  <span>hash</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="headphones"></feather>
                  <span>headphones</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="heart"></feather>
                  <span>heart</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="help-circle"></feather>
                  <span>help-circle</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="hexagon"></feather>
                  <span>hexagon</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="home"></feather>
                  <span>home</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="image"></feather>
                  <span>image</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="inbox"></feather>
                  <span>inbox</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="info"></feather>
                  <span>info</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="instagram"></feather>
                  <span>instagram</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="italic"></feather>
                  <span>italic</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="key"></feather>
                  <span>key</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="layers"></feather>
                  <span>layers</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="layout"></feather>
                  <span>layout</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="life-buoy"></feather>
                  <span>life-buoy</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="link-2"></feather>
                  <span>link-2</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="link"></feather>
                  <span>link</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="linkedin"></feather>
                  <span>linkedin</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="list"></feather>
                  <span>list</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="loader"></feather>
                  <span>loader</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="lock"></feather>
                  <span>lock</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="log-in"></feather>
                  <span>log-in</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="log-out"></feather>
                  <span>log-out</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="mail"></feather>
                  <span>mail</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="map-pin"></feather>
                  <span>map-pin</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="map"></feather>
                  <span>map</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="maximize-2"></feather>
                  <span>maximize-2</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="maximize"></feather>
                  <span>maximize</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="meh"></feather>
                  <span>meh</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="menu"></feather>
                  <span>menu</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="message-circle"></feather>
                  <span>message-circle</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="message-square"></feather>
                  <span>message-square</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="mic-off"></feather>
                  <span>mic-off</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="mic"></feather>
                  <span>mic</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="minimize-2"></feather>
                  <span>minimize-2</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="minimize"></feather>
                  <span>minimize</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="minus-circle"></feather>
                  <span>minus-circle</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="minus-square"></feather>
                  <span>minus-square</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="minus"></feather>
                  <span>minus</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="monitor"></feather>
                  <span>monitor</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="moon"></feather>
                  <span>moon</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="more-horizontal"></feather>
                  <span>more-horizontal</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="more-vertical"></feather>
                  <span>more-vertical</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="mouse-pointer"></feather>
                  <span>mouse-pointer</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="move"></feather>
                  <span>move</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="music"></feather>
                  <span>music</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="navigation-2"></feather>
                  <span>navigation-2</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="navigation"></feather>
                  <span>navigation</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="octagon"></feather>
                  <span>octagon</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="package"></feather>
                  <span>package</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="paperclip"></feather>
                  <span>paperclip</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="pause-circle"></feather>
                  <span>pause-circle</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="pause"></feather>
                  <span>pause</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="pen-tool"></feather>
                  <span>pen-tool</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="percent"></feather>
                  <span>percent</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="phone-call"></feather>
                  <span>phone-call</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="phone-forwarded"></feather>
                  <span>phone-forwarded</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="phone-incoming"></feather>
                  <span>phone-incoming</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="phone-missed"></feather>
                  <span>phone-missed</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="phone-off"></feather>
                  <span>phone-off</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="phone-outgoing"></feather>
                  <span>phone-outgoing</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="phone"></feather>
                  <span>phone</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="pie-chart"></feather>
                  <span>pie-chart</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="play-circle"></feather>
                  <span>play-circle</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="play"></feather>
                  <span>play</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="plus-circle"></feather>
                  <span>plus-circle</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="plus-square"></feather>
                  <span>plus-square</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="plus"></feather>
                  <span>plus</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="pocket"></feather>
                  <span>pocket</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="power"></feather>
                  <span>power</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="printer"></feather>
                  <span>printer</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="radio"></feather>
                  <span>radio</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="refresh-ccw"></feather>
                  <span>refresh-ccw</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="refresh-cw"></feather>
                  <span>refresh-cw</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="repeat"></feather>
                  <span>repeat</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="rewind"></feather>
                  <span>rewind</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="rotate-ccw"></feather>
                  <span>rotate-ccw</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="rotate-cw"></feather>
                  <span>rotate-cw</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="rss"></feather>
                  <span>rss</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="save"></feather>
                  <span>save</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="scissors"></feather>
                  <span>scissors</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="search"></feather>
                  <span>search</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="send"></feather>
                  <span>send</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="server"></feather>
                  <span>server</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="settings"></feather>
                  <span>settings</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="share-2"></feather>
                  <span>share-2</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="share"></feather>
                  <span>share</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="shield-off"></feather>
                  <span>shield-off</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="shield"></feather>
                  <span>shield</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="shopping-bag"></feather>
                  <span>shopping-bag</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="shopping-cart"></feather>
                  <span>shopping-cart</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="shuffle"></feather>
                  <span>shuffle</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="sidebar"></feather>
                  <span>sidebar</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="skip-back"></feather>
                  <span>skip-back</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="skip-forward"></feather>
                  <span>skip-forward</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="slack"></feather>
                  <span>slack</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="slash"></feather>
                  <span>slash</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="sliders"></feather>
                  <span>sliders</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="smartphone"></feather>
                  <span>smartphone</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="smile"></feather>
                  <span>smile</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="speaker"></feather>
                  <span>speaker</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="square"></feather>
                  <span>square</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="star"></feather>
                  <span>star</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="stop-circle"></feather>
                  <span>stop-circle</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="sun"></feather>
                  <span>sun</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="sunrise"></feather>
                  <span>sunrise</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="sunset"></feather>
                  <span>sunset</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="tablet"></feather>
                  <span>tablet</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="tag"></feather>
                  <span>tag</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="target"></feather>
                  <span>target</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="terminal"></feather>
                  <span>terminal</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="thermometer"></feather>
                  <span>thermometer</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="thumbs-down"></feather>
                  <span>thumbs-down</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="thumbs-up"></feather>
                  <span>thumbs-up</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="toggle-left"></feather>
                  <span>toggle-left</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="toggle-right"></feather>
                  <span>toggle-right</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="tool"></feather>
                  <span>tool</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="trash-2"></feather>
                  <span>trash-2</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="trash"></feather>
                  <span>trash</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="trello"></feather>
                  <span>trello</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="trending-down"></feather>
                  <span>trending-down</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="trending-up"></feather>
                  <span>trending-up</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="triangle"></feather>
                  <span>triangle</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="truck"></feather>
                  <span>truck</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="tv"></feather>
                  <span>tv</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="twitch"></feather>
                  <span>twitch</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="twitter"></feather>
                  <span>twitter</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="type"></feather>
                  <span>type</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="umbrella"></feather>
                  <span>umbrella</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="underline"></feather>
                  <span>underline</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="unlock"></feather>
                  <span>unlock</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="upload-cloud"></feather>
                  <span>upload-cloud</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="upload"></feather>
                  <span>upload</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="user-check"></feather>
                  <span>user-check</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="user-minus"></feather>
                  <span>user-minus</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="user-plus"></feather>
                  <span>user-plus</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="user-x"></feather>
                  <span>user-x</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="user"></feather>
                  <span>user</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="users"></feather>
                  <span>users</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="video-off"></feather>
                  <span>video-off</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="video"></feather>
                  <span>video</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="voicemail"></feather>
                  <span>voicemail</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="volume-1"></feather>
                  <span>volume-1</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="volume-2"></feather>
                  <span>volume-2</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="volume-x"></feather>
                  <span>volume-x</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="volume"></feather>
                  <span>volume</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="watch"></feather>
                  <span>watch</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="wifi-off"></feather>
                  <span>wifi-off</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="wifi"></feather>
                  <span>wifi</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="wind"></feather>
                  <span>wind</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="x-circle"></feather>
                  <span>x-circle</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="x-octagon"></feather>
                  <span>x-octagon</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="x-square"></feather>
                  <span>x-square</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="x"></feather>
                  <span>x</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="youtube"></feather>
                  <span>youtube</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="zap-off"></feather>
                  <span>zap-off</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="zap"></feather>
                  <span>zap</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="zoom-in"></feather>
                  <span>zoom-in</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="zoom-out"></feather>
                  <span>zoom-out</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h5 class="mt-0 mb-1 header-title">Two Tone Icons</h5>
            <p class="mb-3">
              Use
              <code
                >&lt;feather type="activity"
                class="icon-dual"&gt;&lt;/feather&gt;</code
              >.
            </p>

            <div class="row icons-list">
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="activity" class="icon-dual"></feather>
                  <span>activity</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="airplay" class="icon-dual"></feather>
                  <span>airplay</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="alert-circle" class="icon-dual"></feather>
                  <span>alert-circle</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="alert-octagon" class="icon-dual"></feather>
                  <span>alert-octagon</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="alert-triangle" class="icon-dual"></feather>
                  <span>alert-triangle</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="align-center" class="icon-dual"></feather>
                  <span>align-center</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="align-justify" class="icon-dual"></feather>
                  <span>align-justify</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="align-left" class="icon-dual"></feather>
                  <span>align-left</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="align-right" class="icon-dual"></feather>
                  <span>align-right</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="anchor" class="icon-dual"></feather>
                  <span>anchor</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="aperture" class="icon-dual"></feather>
                  <span>aperture</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="archive" class="icon-dual"></feather>
                  <span>archive</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="arrow-down-circle" class="icon-dual"></feather>
                  <span>arrow-down-circle</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="arrow-down-left" class="icon-dual"></feather>
                  <span>arrow-down-left</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="arrow-down-right" class="icon-dual"></feather>
                  <span>arrow-down-right</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="arrow-down" class="icon-dual"></feather>
                  <span>arrow-down</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="arrow-left-circle" class="icon-dual"></feather>
                  <span>arrow-left-circle</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="arrow-left" class="icon-dual"></feather>
                  <span>arrow-left</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather
                    type="arrow-right-circle"
                    class="icon-dual"
                  ></feather>
                  <span>arrow-right-circle</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="arrow-right" class="icon-dual"></feather>
                  <span>arrow-right</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="arrow-up-circle" class="icon-dual"></feather>
                  <span>arrow-up-circle</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="arrow-up-left" class="icon-dual"></feather>
                  <span>arrow-up-left</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="arrow-up-right" class="icon-dual"></feather>
                  <span>arrow-up-right</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="arrow-up" class="icon-dual"></feather>
                  <span>arrow-up</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="at-sign" class="icon-dual"></feather>
                  <span>at-sign</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="award" class="icon-dual"></feather>
                  <span>award</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="bar-chart-2" class="icon-dual"></feather>
                  <span>bar-chart-2</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="bar-chart" class="icon-dual"></feather>
                  <span>bar-chart</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="battery-charging" class="icon-dual"></feather>
                  <span>battery-charging</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="battery" class="icon-dual"></feather>
                  <span>battery</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="bell-off" class="icon-dual"></feather>
                  <span>bell-off</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="bell" class="icon-dual"></feather>
                  <span>bell</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="bluetooth" class="icon-dual"></feather>
                  <span>bluetooth</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="bold" class="icon-dual"></feather>
                  <span>bold</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="book-open" class="icon-dual"></feather>
                  <span>book-open</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="book" class="icon-dual"></feather>
                  <span>book</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="bookmark" class="icon-dual"></feather>
                  <span>bookmark</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="box" class="icon-dual"></feather>
                  <span>box</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="briefcase" class="icon-dual"></feather>
                  <span>briefcase</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="calendar" class="icon-dual"></feather>
                  <span>calendar</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="camera-off" class="icon-dual"></feather>
                  <span>camera-off</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="camera" class="icon-dual"></feather>
                  <span>camera</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="cast" class="icon-dual"></feather>
                  <span>cast</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="check-circle" class="icon-dual"></feather>
                  <span>check-circle</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="check-square" class="icon-dual"></feather>
                  <span>check-square</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="check" class="icon-dual"></feather>
                  <span>check</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="chevron-down" class="icon-dual"></feather>
                  <span>chevron-down</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="chevron-left" class="icon-dual"></feather>
                  <span>chevron-left</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="chevron-right" class="icon-dual"></feather>
                  <span>chevron-right</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="chevron-up" class="icon-dual"></feather>
                  <span>chevron-up</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="chevrons-down" class="icon-dual"></feather>
                  <span>chevrons-down</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="chevrons-left" class="icon-dual"></feather>
                  <span>chevrons-left</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="chevrons-right" class="icon-dual"></feather>
                  <span>chevrons-right</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="chevrons-up" class="icon-dual"></feather>
                  <span>chevrons-up</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="chrome" class="icon-dual"></feather>
                  <span>chrome</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="circle" class="icon-dual"></feather>
                  <span>circle</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="clipboard" class="icon-dual"></feather>
                  <span>clipboard</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="clock" class="icon-dual"></feather>
                  <span>clock</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="cloud-drizzle" class="icon-dual"></feather>
                  <span>cloud-drizzle</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="cloud-lightning" class="icon-dual"></feather>
                  <span>cloud-lightning</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="cloud-off" class="icon-dual"></feather>
                  <span>cloud-off</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="cloud-rain" class="icon-dual"></feather>
                  <span>cloud-rain</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="cloud-snow" class="icon-dual"></feather>
                  <span>cloud-snow</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="cloud" class="icon-dual"></feather>
                  <span>cloud</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="code" class="icon-dual"></feather>
                  <span>code</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="codepen" class="icon-dual"></feather>
                  <span>codepen</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="codesandbox" class="icon-dual"></feather>
                  <span>codesandbox</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="coffee" class="icon-dual"></feather>
                  <span>coffee</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="columns" class="icon-dual"></feather>
                  <span>columns</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="command" class="icon-dual"></feather>
                  <span>command</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="compass" class="icon-dual"></feather>
                  <span>compass</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="copy" class="icon-dual"></feather>
                  <span>copy</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="corner-down-left" class="icon-dual"></feather>
                  <span>corner-down-left</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="corner-down-right" class="icon-dual"></feather>
                  <span>corner-down-right</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="corner-left-down" class="icon-dual"></feather>
                  <span>corner-left-down</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="corner-left-up" class="icon-dual"></feather>
                  <span>corner-left-up</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="corner-right-down" class="icon-dual"></feather>
                  <span>corner-right-down</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="corner-right-up" class="icon-dual"></feather>
                  <span>corner-right-up</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="corner-up-left" class="icon-dual"></feather>
                  <span>corner-up-left</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="corner-up-right" class="icon-dual"></feather>
                  <span>corner-up-right</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="cpu" class="icon-dual"></feather>
                  <span>cpu</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="credit-card" class="icon-dual"></feather>
                  <span>credit-card</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="crop" class="icon-dual"></feather>
                  <span>crop</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="crosshair" class="icon-dual"></feather>
                  <span>crosshair</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="database" class="icon-dual"></feather>
                  <span>database</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="delete" class="icon-dual"></feather>
                  <span>delete</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="disc" class="icon-dual"></feather>
                  <span>disc</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="dollar-sign" class="icon-dual"></feather>
                  <span>dollar-sign</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="download-cloud" class="icon-dual"></feather>
                  <span>download-cloud</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="download" class="icon-dual"></feather>
                  <span>download</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="droplet" class="icon-dual"></feather>
                  <span>droplet</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="edit-2" class="icon-dual"></feather>
                  <span>edit-2</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="edit-3" class="icon-dual"></feather>
                  <span>edit-3</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="edit" class="icon-dual"></feather>
                  <span>edit</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="external-link" class="icon-dual"></feather>
                  <span>external-link</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="eye-off" class="icon-dual"></feather>
                  <span>eye-off</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="eye" class="icon-dual"></feather>
                  <span>eye</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="facebook" class="icon-dual"></feather>
                  <span>facebook</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="fast-forward" class="icon-dual"></feather>
                  <span>fast-forward</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="feather" class="icon-dual"></feather>
                  <span>feather</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="figma" class="icon-dual"></feather>
                  <span>figma</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="file-minus" class="icon-dual"></feather>
                  <span>file-minus</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="file-plus" class="icon-dual"></feather>
                  <span>file-plus</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="file-text" class="icon-dual"></feather>
                  <span>file-text</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="file" class="icon-dual"></feather>
                  <span>file</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="film" class="icon-dual"></feather>
                  <span>film</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="filter" class="icon-dual"></feather>
                  <span>filter</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="flag" class="icon-dual"></feather>
                  <span>flag</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="folder-minus" class="icon-dual"></feather>
                  <span>folder-minus</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="folder-plus" class="icon-dual"></feather>
                  <span>folder-plus</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="folder" class="icon-dual"></feather>
                  <span>folder</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="framer" class="icon-dual"></feather>
                  <span>framer</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="frown" class="icon-dual"></feather>
                  <span>frown</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="gift" class="icon-dual"></feather>
                  <span>gift</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="git-branch" class="icon-dual"></feather>
                  <span>git-branch</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="git-commit" class="icon-dual"></feather>
                  <span>git-commit</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="git-merge" class="icon-dual"></feather>
                  <span>git-merge</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="git-pull-request" class="icon-dual"></feather>
                  <span>git-pull-request</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="github" class="icon-dual"></feather>
                  <span>github</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="gitlab" class="icon-dual"></feather>
                  <span>gitlab</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="globe" class="icon-dual"></feather>
                  <span>globe</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="grid" class="icon-dual"></feather>
                  <span>grid</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="hard-drive" class="icon-dual"></feather>
                  <span>hard-drive</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="hash" class="icon-dual"></feather>
                  <span>hash</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="headphones" class="icon-dual"></feather>
                  <span>headphones</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="heart" class="icon-dual"></feather>
                  <span>heart</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="help-circle" class="icon-dual"></feather>
                  <span>help-circle</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="hexagon" class="icon-dual"></feather>
                  <span>hexagon</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="home" class="icon-dual"></feather>
                  <span>home</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="image" class="icon-dual"></feather>
                  <span>image</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="inbox" class="icon-dual"></feather>
                  <span>inbox</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="info" class="icon-dual"></feather>
                  <span>info</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="instagram" class="icon-dual"></feather>
                  <span>instagram</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="italic" class="icon-dual"></feather>
                  <span>italic</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="key" class="icon-dual"></feather>
                  <span>key</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="layers" class="icon-dual"></feather>
                  <span>layers</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="layout" class="icon-dual"></feather>
                  <span>layout</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="life-buoy" class="icon-dual"></feather>
                  <span>life-buoy</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="link-2" class="icon-dual"></feather>
                  <span>link-2</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="link" class="icon-dual"></feather>
                  <span>link</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="linkedin" class="icon-dual"></feather>
                  <span>linkedin</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="list" class="icon-dual"></feather>
                  <span>list</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="loader" class="icon-dual"></feather>
                  <span>loader</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="lock" class="icon-dual"></feather>
                  <span>lock</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="log-in" class="icon-dual"></feather>
                  <span>log-in</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="log-out" class="icon-dual"></feather>
                  <span>log-out</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="mail" class="icon-dual"></feather>
                  <span>mail</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="map-pin" class="icon-dual"></feather>
                  <span>map-pin</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="map" class="icon-dual"></feather>
                  <span>map</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="maximize-2" class="icon-dual"></feather>
                  <span>maximize-2</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="maximize" class="icon-dual"></feather>
                  <span>maximize</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="meh" class="icon-dual"></feather>
                  <span>meh</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="menu" class="icon-dual"></feather>
                  <span>menu</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="message-circle" class="icon-dual"></feather>
                  <span>message-circle</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="message-square" class="icon-dual"></feather>
                  <span>message-square</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="mic-off" class="icon-dual"></feather>
                  <span>mic-off</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="mic" class="icon-dual"></feather>
                  <span>mic</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="minimize-2" class="icon-dual"></feather>
                  <span>minimize-2</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="minimize" class="icon-dual"></feather>
                  <span>minimize</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="minus-circle" class="icon-dual"></feather>
                  <span>minus-circle</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="minus-square" class="icon-dual"></feather>
                  <span>minus-square</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="minus" class="icon-dual"></feather>
                  <span>minus</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="monitor" class="icon-dual"></feather>
                  <span>monitor</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="moon" class="icon-dual"></feather>
                  <span>moon</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="more-horizontal" class="icon-dual"></feather>
                  <span>more-horizontal</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="more-vertical" class="icon-dual"></feather>
                  <span>more-vertical</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="mouse-pointer" class="icon-dual"></feather>
                  <span>mouse-pointer</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="move" class="icon-dual"></feather>
                  <span>move</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="music" class="icon-dual"></feather>
                  <span>music</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="navigation-2" class="icon-dual"></feather>
                  <span>navigation-2</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="navigation" class="icon-dual"></feather>
                  <span>navigation</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="octagon" class="icon-dual"></feather>
                  <span>octagon</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="package" class="icon-dual"></feather>
                  <span>package</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="paperclip" class="icon-dual"></feather>
                  <span>paperclip</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="pause-circle" class="icon-dual"></feather>
                  <span>pause-circle</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="pause" class="icon-dual"></feather>
                  <span>pause</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="pen-tool" class="icon-dual"></feather>
                  <span>pen-tool</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="percent" class="icon-dual"></feather>
                  <span>percent</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="phone-call" class="icon-dual"></feather>
                  <span>phone-call</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="phone-forwarded" class="icon-dual"></feather>
                  <span>phone-forwarded</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="phone-incoming" class="icon-dual"></feather>
                  <span>phone-incoming</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="phone-missed" class="icon-dual"></feather>
                  <span>phone-missed</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="phone-off" class="icon-dual"></feather>
                  <span>phone-off</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="phone-outgoing" class="icon-dual"></feather>
                  <span>phone-outgoing</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="phone" class="icon-dual"></feather>
                  <span>phone</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="pie-chart" class="icon-dual"></feather>
                  <span>pie-chart</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="play-circle" class="icon-dual"></feather>
                  <span>play-circle</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="play" class="icon-dual"></feather>
                  <span>play</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="plus-circle" class="icon-dual"></feather>
                  <span>plus-circle</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="plus-square" class="icon-dual"></feather>
                  <span>plus-square</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="plus" class="icon-dual"></feather>
                  <span>plus</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="pocket" class="icon-dual"></feather>
                  <span>pocket</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="power" class="icon-dual"></feather>
                  <span>power</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="printer" class="icon-dual"></feather>
                  <span>printer</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="radio" class="icon-dual"></feather>
                  <span>radio</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="refresh-ccw" class="icon-dual"></feather>
                  <span>refresh-ccw</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="refresh-cw" class="icon-dual"></feather>
                  <span>refresh-cw</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="repeat" class="icon-dual"></feather>
                  <span>repeat</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="rewind" class="icon-dual"></feather>
                  <span>rewind</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="rotate-ccw" class="icon-dual"></feather>
                  <span>rotate-ccw</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="rotate-cw" class="icon-dual"></feather>
                  <span>rotate-cw</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="rss" class="icon-dual"></feather>
                  <span>rss</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="save" class="icon-dual"></feather>
                  <span>save</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="scissors" class="icon-dual"></feather>
                  <span>scissors</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="search" class="icon-dual"></feather>
                  <span>search</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="send" class="icon-dual"></feather>
                  <span>send</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="server" class="icon-dual"></feather>
                  <span>server</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="settings" class="icon-dual"></feather>
                  <span>settings</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="share-2" class="icon-dual"></feather>
                  <span>share-2</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="share" class="icon-dual"></feather>
                  <span>share</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="shield-off" class="icon-dual"></feather>
                  <span>shield-off</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="shield" class="icon-dual"></feather>
                  <span>shield</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="shopping-bag" class="icon-dual"></feather>
                  <span>shopping-bag</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="shopping-cart" class="icon-dual"></feather>
                  <span>shopping-cart</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="shuffle" class="icon-dual"></feather>
                  <span>shuffle</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="sidebar" class="icon-dual"></feather>
                  <span>sidebar</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="skip-back" class="icon-dual"></feather>
                  <span>skip-back</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="skip-forward" class="icon-dual"></feather>
                  <span>skip-forward</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="slack" class="icon-dual"></feather>
                  <span>slack</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="slash" class="icon-dual"></feather>
                  <span>slash</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="sliders" class="icon-dual"></feather>
                  <span>sliders</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="smartphone" class="icon-dual"></feather>
                  <span>smartphone</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="smile" class="icon-dual"></feather>
                  <span>smile</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="speaker" class="icon-dual"></feather>
                  <span>speaker</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="square" class="icon-dual"></feather>
                  <span>square</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="star" class="icon-dual"></feather>
                  <span>star</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="stop-circle" class="icon-dual"></feather>
                  <span>stop-circle</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="sun" class="icon-dual"></feather>
                  <span>sun</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="sunrise" class="icon-dual"></feather>
                  <span>sunrise</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="sunset" class="icon-dual"></feather>
                  <span>sunset</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="tablet" class="icon-dual"></feather>
                  <span>tablet</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="tag" class="icon-dual"></feather>
                  <span>tag</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="target" class="icon-dual"></feather>
                  <span>target</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="terminal" class="icon-dual"></feather>
                  <span>terminal</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="thermometer" class="icon-dual"></feather>
                  <span>thermometer</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="thumbs-down" class="icon-dual"></feather>
                  <span>thumbs-down</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="thumbs-up" class="icon-dual"></feather>
                  <span>thumbs-up</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="toggle-left" class="icon-dual"></feather>
                  <span>toggle-left</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="toggle-right" class="icon-dual"></feather>
                  <span>toggle-right</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="tool" class="icon-dual"></feather>
                  <span>tool</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="trash-2" class="icon-dual"></feather>
                  <span>trash-2</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="trash" class="icon-dual"></feather>
                  <span>trash</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="trello" class="icon-dual"></feather>
                  <span>trello</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="trending-down" class="icon-dual"></feather>
                  <span>trending-down</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="trending-up" class="icon-dual"></feather>
                  <span>trending-up</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="triangle" class="icon-dual"></feather>
                  <span>triangle</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="truck" class="icon-dual"></feather>
                  <span>truck</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="tv" class="icon-dual"></feather>
                  <span>tv</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="twitch" class="icon-dual"></feather>
                  <span>twitch</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="twitter" class="icon-dual"></feather>
                  <span>twitter</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="type" class="icon-dual"></feather>
                  <span>type</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="umbrella" class="icon-dual"></feather>
                  <span>umbrella</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="underline" class="icon-dual"></feather>
                  <span>underline</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="unlock" class="icon-dual"></feather>
                  <span>unlock</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="upload-cloud" class="icon-dual"></feather>
                  <span>upload-cloud</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="upload" class="icon-dual"></feather>
                  <span>upload</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="user-check" class="icon-dual"></feather>
                  <span>user-check</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="user-minus" class="icon-dual"></feather>
                  <span>user-minus</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="user-plus" class="icon-dual"></feather>
                  <span>user-plus</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="user-x" class="icon-dual"></feather>
                  <span>user-x</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="user" class="icon-dual"></feather>
                  <span>user</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="users" class="icon-dual"></feather>
                  <span>users</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="video-off" class="icon-dual"></feather>
                  <span>video-off</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="video" class="icon-dual"></feather>
                  <span>video</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="voicemail" class="icon-dual"></feather>
                  <span>voicemail</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="volume-1" class="icon-dual"></feather>
                  <span>volume-1</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="volume-2" class="icon-dual"></feather>
                  <span>volume-2</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="volume-x" class="icon-dual"></feather>
                  <span>volume-x</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="volume" class="icon-dual"></feather>
                  <span>volume</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="watch" class="icon-dual"></feather>
                  <span>watch</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="wifi-off" class="icon-dual"></feather>
                  <span>wifi-off</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="wifi" class="icon-dual"></feather>
                  <span>wifi</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="wind" class="icon-dual"></feather>
                  <span>wind</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="x-circle" class="icon-dual"></feather>
                  <span>x-circle</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="x-octagon" class="icon-dual"></feather>
                  <span>x-octagon</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="x-square" class="icon-dual"></feather>
                  <span>x-square</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="x" class="icon-dual"></feather>
                  <span>x</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="youtube" class="icon-dual"></feather>
                  <span>youtube</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="zap-off" class="icon-dual"></feather>
                  <span>zap-off</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="zap" class="icon-dual"></feather>
                  <span>zap</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="zoom-in" class="icon-dual"></feather>
                  <span>zoom-in</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="zoom-out" class="icon-dual"></feather>
                  <span>zoom-out</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h5 class="mt-0 mb-1 header-title">Sizes</h5>
            <p class="mb-3">
              Use
              <code
                >&lt;feather type="activity"
                class="icons-**"&gt;&lt;/feather&gt;</code
              >. Available sizes
              <code>xs,lg,xl,xxl</code>
            </p>

            <div class="row icons-list">
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="airplay" class="icon-xs icon-dual"></feather>
                  <span>Extra Small</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="airplay" class="icon-sm icon-dual"></feather>
                  <span>Small</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="airplay" class="icon-lg icon-dual"></feather>
                  <span>Large</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="airplay" class="icon-xl icon-dual"></feather>
                  <span>Extra Large</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="airplay" class="icon-xxl icon-dual"></feather>
                  <span>Extra Extra Large</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h5 class="mt-0 mb-1 header-title">Two Tones Color Icons</h5>
            <p class="mb-3">
              Use
              <code
                >&lt;feather type="activity"
                class="icon-dual-**"&gt;&lt;/feather&gt;</code
              >.
            </p>

            <div class="row icons-list">
              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="activity" class="icon-dual-primary"></feather>
                  <span>activity</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="airplay" class="icon-dual-success"></feather>
                  <span>airplay</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather
                    type="alert-circle"
                    class="icon-dual-danger"
                  ></feather>
                  <span>alert-circle</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather
                    type="alert-octagon"
                    class="icon-dual-info"
                  ></feather>
                  <span>alert-octagon</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather
                    type="alert-triangle"
                    class="icon-dual-warning"
                  ></feather>
                  <span>alert-triangle</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="anchor" class="icon-dual-dark"></feather>
                  <span>anchor</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="aperture" class="icon-dual-primary"></feather>
                  <span>aperture</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="archive" class="icon-dual-success"></feather>
                  <span>archive</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="clock" class="icon-dual-danger"></feather>
                  <span>clock</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="shopping-bag" class="icon-dual-info"></feather>
                  <span>shopping-bag</span>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-sm-6">
                <div class="icon-item">
                  <feather type="printer" class="icon-dual-warning"></feather>
                  <span>printer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end card -->
      </div>
    </div>
    <!-- end row -->
  </Layout>
</template>
