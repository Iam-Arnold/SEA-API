const config = {
    exoplanetAPI: 'https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+pl_name,pl_bmassj,pl_bmassj_reflink,pl_orbsmax,pl_orbsmax_reflink,sy_snum%20+from+pscomppars+where+sy_snum+%3E+1+and+pl_bmassj+%3C=+13+order+by+pl_bmassj+desc&format=json',
    starsAPI: 'https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=missionstars&where=st_disterr1+is+not+null+and+st_disterr2+is+not+null&format=json'
};

module.exports = config;
