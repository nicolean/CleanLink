// This list is based on https://github.com/AdguardTeam/AdguardFilters/blob/master/TrackParamFilter/sections/general_url.txt
export default filters = [
  // Adobe Marketo email tracking
  "mkt_tok",
  // Adobe SiteCatalyst Campaign Tracking ID parameter
  "s_cid",
  // Hubspot tracking https://knowledge.hubspot.com/ads/ad-tracking-in-hubspot
  "__hsfp",
  "__hssc",
  "__hstc",
  "_hsenc",
  "hsa_acc",
  "hsa_ad",
  "hsa_cam",
  "hsa_grp",
  "hsa_kw",
  "hsa_la",
  "hsa_mt",
  "hsa_net",
  "hsa_ol",
  "hsa_src",
  "hsa_tgt",
  "hsa_ver",
  "hsCtaTracking",
  // Instagram
  "igshid",
  // Yandex Metrika
  "ysclid",
  "yclid",
  "_openstat",
  // https://segmentify.github.io/segmentify-dev-doc/integration_web/
  "_sgm_campaign",
  "_sgm_source",
  "_sgm_action",
  // MailChimp click tracking
  "mc_eid",
  "mc_cid",
  // URL Campaign Mapper
  // https://documentation.mapp.com/latest/en/url-campaign-mapper-19109338.html
  "wt_mc",
  "wt_zmc",
  // Microsoft Click ID
  // https://help.ads.microsoft.com/apex/index/3/en/60000
  "msclkid",
  // vero
  "vero_conv",
  "vero_id",
  // ITM
  // https://github.com/AdguardTeam/AdguardFilters/issues/126713
  // https://www.parse.ly/help/kb/campaign-tracking-guide
  // https://www.smashingmagazine.com/2017/08/tracking-internal-marketing-campaigns-google-analytics/
  "itm_source",
  "itm_medium",
  "itm_campaign",
  "itm_content",
  "itm_term",
  // UTM
  "utm_ad",
  "utm_affiliate",
  "utm_brand",
  "utm_campaign",
  "utm_campaignid",
  "utm_channel",
  "utm_cid",
  "utm_content",
  "utm_creative",
  "utm_emcid",
  "utm_emmid",
  "utm_id",
  "utm_id_",
  "utm_keyword",
  "utm_medium",
  "utm_name",
  "utm_place",
  "utm_product",
  "utm_pubreferrer",
  "utm_reader",
  "utm_referrer",
  "utm_serial",
  "utm_session",
  "utm_siteid",
  "utm_social",
  "utm_social-type",
  "utm_source",
  "utm_supplier",
  "utm_swu",
  "utm_term",
  "utm_umguk",
  "utm_userid",
  "utm_viz_id",
  // Google ads/analytics
  "gbraid",
  "wbraid",
  "gclsrc",
  "gclid",
  // Google AMP-analytics
  "usqp",
  // DPG Media analytics
  // Used on Dutch sites
  "dpg_source",
  "dpg_campaign",
  "dpg_medium",
  "dpg_content",
  // Matomo/Piwik
  "mtm_campaign",
  "mtm_cid",
  "mtm_content",
  "mtm_group",
  "mtm_keyword",
  "mtm_medium",
  "mtm_placement",
  "mtm_source",
  "pk_campaign",
  "pk_medium",
  "pk_source",
  "pk_vid",
  // Branch.io ( https://stackoverflow.com/questions/37882810/what-is-meaning-of-branch-match-id )
  "_branch_match_id",
  // https://github.com/brave/brave-browser/issues/17507
  "ml_subscriber",
  "ml_subscriber_hash",
  // https://github.com/brave/brave-browser/issues/17451
  "rb_clickid",
  // https://github.com/brave/brave-browser/issues/13644
  "oly_anon_id",
  "oly_enc_id",
  // Facebook analytics
  "fbclid",
  "fb_action_ids",
  "fb_action_types",
  "fb_comment_id",
  "fb_ref",
  "fb_source",
  // Campaign Tracking
  "cmpid",
  // Yahoo!
  "guccounter",
  "guce_referrer",
  "guce_referrer_sig",
  // Action Map
  "action_object_map",
  "action_ref_map",
  "action_type_map",
];
