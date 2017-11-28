---
---
window.onload = function () {
  window.history.replaceState('object or string', 'Title', `https://${window.location.hostname}${window.location.pathname}`)
},
jQuery(function(s) {
    function $(fa) {
      const ga = s(fa.target).closest('div'),
        ha = ga.children()[0];
      return ha.innerHTML
    }

    function _(fa) {
      const ga = decodeURIComponent(window.location.search.substring(1)),
        ha = ga.split('&');
      let ia, ja;
      for (ja = 0; ja < ha.length; ja++)
        if (ia = ha[ja].split('='), ia[0] === fa) return void 0 === ia[1] || ia[1];
      window.history.replaceState('object or string', 'Title', `https://${window.location.hostname}${window.location.pathname}`)
    }(function() {
      if (location.pathname.includes('quote')) {
        let fa = _('message'),
          ga = _('type');
        s('#message').val(fa), s(`#${ga}`).prop('checked', !0)
      }
    })(), s('.enquire').click(function(fa) {
      const ga = `I would like to enquire about a supply of ${$(fa)}.`;
      location.href = '{{ site.baseurl }}' + `quote/?message=${ga}&type=oil-col`
    })
  }),
  function() {
    function s(fa, ga) {
      this.selector = null, ga ? this.nodes = ga : 'string' == typeof fa ? (this.selector = fa, this.nodes = document.querySelectorAll(fa)) : this.nodes = [fa], this.length = this.nodes.length, this.el = this.nodes[0]
    }

    function $(fa) {
      return new s(fa)
    }

    function _(fa, ga) {
      function ha(cb, db, eb) {
        cb = cb || {}, ia(), !1 !== db && la(), Ra = Qa = Pa = null, Sa = -1, Wa = Va = Ua = Ta = null, Xa = !1, Ya = null, Za = !1, $a = null, ka(cb), ma(), Ga(Pa.transition_type, !0), Qa.find('#' + fa + ' .ism-caption').css('visibility', 'hidden'), ua(), ya(), oa(Pa.play_type), Da(), setTimeout(function() {
          !0 !== eb && ja()
        }, 1E3)
      }

      function ia() {
        $('#' + fa + '-ism-loading-mask').remove();
        var cb = document.createElement('DIV');
        cb.id = fa + '-ism-loading-mask', cb.style.position = 'absolute', cb.style.zIndex = 10, cb.style.top = 0, cb.style.bottom = 0, cb.style.left = 0, cb.style.right = 0, cb.style.backgroundColor = '#eee', $('#' + fa).el.appendChild(cb)
      }

      function ja() {
        $('#' + fa).show(), 1 == $('#' + fa + '-ism-loading-mask').length && $('#' + fa + '-ism-loading-mask').fadeOut(400, function() {
          $('#' + fa + '-ism-loading-mask').remove(), La(0), Na(0)
        })
      }

      function ka(cb) {
        for (var db in _a) {
          var eb = typeof _a[db];
          void 0 == cb[db] && 'object' != eb && (eb = $('#' + fa).data(db), void 0 != eb && ('true' === eb ? eb = !0 : 'false' == eb && (eb = !1), cb[db] = eb))
        }
        for (db in Pa = cb || {}, _a) void 0 == Pa[db] && (Pa[db] = _a[db]);
        for (Pa.captions = ['Taking care of your cooking oil supply and collection', 'Collecting all types of kitchen waste', 'Delivering the finest grade produce', 'Operating in eco-friendly manner'], cb = $('#' + fa + ' ol > li'), db = cb.length, eb = 0; eb < db; eb++) {
          Pa.captions[eb] = [];
          for (var fb = 0; 3 > fb; fb++) {
            var gb = {
                enable: ab[fb].enable,
                delay: ab[fb].delay
              },
              ob = $(cb.get(eb)).find('.ism-caption-' + fb);
            1 == ob.length && (gb.enable = !0, ob = ob.data('delay'), isNaN(ob) || (gb.delay = parseInt(ob))), Pa.captions[eb][fb] = gb
          }
        }
      }

      function la() {
        for (sa(), Ma(), $a && $a.unbindEventListeners(), va(), $('#' + fa + ' .ism-radios input.ism-radio, #' + fa + ' .ism-radios .ism-radio-label').off('click', za), $('#' + fa + ' .ism-radios input.ism-radio, #' + fa + ' .ism-radios .ism-radio-label').off('touchstart', za), Ba(), $('#' + fa + ' .ism-button').remove(), $('#' + fa + ' .ism-radios').remove(), $('#' + fa + ' .ism-cloned').remove(), $('#' + fa + ' .ism-tmp-clone').remove(); 0 < $('#' + fa + ' .ism-frame').length;) $('#' + fa + ' .ism-slides').unwrap();
        0 < $('#' + fa + ' .ism-img-frame').length && $('#' + fa + ' .ism-img').unwrap(), $('#' + fa + ' .ism-caption').removeAttr('style'), $('#' + fa + ' .ism-slide').show(), $('#' + fa + ' .ism-slide').removeAttr('style'), $('#' + fa + ' .ism-slides').removeAttr('style'), $('#' + fa + ' .ism-img').removeClass('ism-img'), $('#' + fa + ' .ism-slide').removeClass('ism-slide ism-slide-0 ism-slide-1 ism-slide-2 ism-slide-3 ism-slide-4 ism-slide-5 ism-slide-6 ism-slide-7 ism-slide-8 ism-slide-9'), $('#' + fa + ' .ism-slides').removeClass('ism-slides'), $('#' + fa).removeClass('active')
      }

      function ma() {
        Qa = $('#' + fa + ' ol'), Ra = 100 / $('#' + fa + ' ol > li').length, Sa = 0, Qa.addClass('ism-slides'), $('#' + fa + ' .ism-slides > li').addClass('ism-slide'), $('#' + fa + ' .ism-slides > .ism-slide > img, #' + fa + ' .ism-slides > .ism-slide > a > img').addClass('ism-img'), Qa.find('li').each(function(cb) {
          this.addClass('ism-slide-' + cb)
        }), $('#' + fa).wrapInner('<div class=\'ism-frame\'></div>'), Qa = $('#' + fa + ' ol.ism-slides'), $('#' + fa + ' .ism-img').wrap('<div class=\'ism-img-frame\'></div>')
      }

      function na() {
        return $('#' + fa + ' .ism-slide').length
      }

      function oa(cb) {
        Pa.play_type = cb, Ba(), $('#' + fa + ' .ism-pause-button').remove(), Pa.pause_button && 'manual' != Pa.play_type && (Qa.after('<div class=\'ism-pause-button\'>&nbsp;</div>'), Wa = $('#' + fa + ' .ism-pause-button'), Wa.on('click', Ca), Wa.on('touchstart', Ca)), pa()
      }

      function pa() {
        Xa = !0, $('#' + fa + ' .ism-pause-button').removeClass('ism-play'), 'manual' != Pa.play_type && (clearTimeout(Ya), Ya = setTimeout(ra, Pa.interval))
      }

      function qa(cb) {
        const db = document.getElementById('home_caption');
        cb = 4 === cb ? 0 : cb, cb = -1 === cb ? 3 : cb, db.text = ['Taking care of your cooking oil needs.', 'Collecting all types of kitchen waste.', 'Delivering the finest grade produce.', 'Operating in eco-friendly manner.'][cb]
      }

      function ra() {
        var cb = Sa + 1;
        Xa && 'manual' != Pa.play_type && ('once' == Pa.play_type && Sa == na() - 2 ? (Ha(cb), sa()) : 'once-rewind' == Pa.play_type && Sa == na() - 1 ? (Ha(0), sa()) : ('loop' == Pa.play_type && Sa == na() - 1 ? Ha(0) : Ha(cb), pa()))
      }

      function sa() {
        Xa = !1, clearTimeout(Ya), Ya = null, $('#' + fa + ' .ism-pause-button').addClass('ism-play')
      }

      function ta(cb, db) {
        cb != Sa && (sa(), Ha(cb, db))
      }

      function ua() {
        Pa.buttons && (Qa.after('<div class=\'ism-button ism-button-prev\'>&nbsp;</div><div class=\'ism-button ism-button-next\'>&nbsp;</div>'), Ta = $('#' + fa + ' .ism-button-prev'), Ua = $('#' + fa + ' .ism-button-next'), Ta.on('click', wa), Ta.on('touchstart', wa), Ua.on('click', xa), Ua.on('touchstart', xa))
      }

      function va() {
        $('#' + fa + ' .ism-button-prev').off('click', wa), $('#' + fa + ' .ism-button-prev').off('touchstart', wa), $('#' + fa + ' .ism-button-next').off('click', xa), $('#' + fa + ' .ism-button-next').off('touchstart', xa)
      }

      function wa(cb) {
        cb && cb.preventDefault && cb.preventDefault(), cb && cb.stopPropagation && cb.stopPropagation(), ta(Sa - 1)
      }

      function xa(cb) {
        cb && cb.preventDefault && cb.preventDefault(), cb && cb.stopPropagation && cb.stopPropagation(), ta(Sa + 1)
      }

      function ya() {
        if (Pa.radios) {
          $('#' + fa).append('<ul class=\'ism-radios\'></ul>'), Va = $('#' + fa + ' .ism-radios'), 'thumbnail' == Pa.radio_type && Va.addClass('ism-radios-as-thumbnails');
          for (var cb = 0; cb < na(); cb++) 0 == cb ? Va.append('<li class=\'ism-radio-' + cb + ' active\'><input type=\'radio\' name=\'ism-radio\' class=\'ism-radio\' id=\'ism-radio-' + cb + '\' checked=\'checked\' /><label class=\'ism-radio-label\' for=\'ism-radio-' + cb + '\'></label></li>') : Va.append('<li class=\'ism-radio-' + cb + '\'><input type=\'radio\' name=\'ism-radio\' class=\'ism-radio\' id=\'ism-radio-' + cb + '\' /><label class=\'ism-radio-label\' for=\'ism-radio-' + cb + '\'></label></li>');
          $('#' + fa + ' .ism-radios input.ism-radio, #' + fa + ' .ism-radios .ism-radio-label').on('click', za), $('#' + fa + ' .ism-radios input.ism-radio, #' + fa + ' .ism-radios .ism-radio-label').on('touchstart', za)
        }
      }

      function za(cb) {
        cb.preventDefault && cb.preventDefault(), cb.stopPropagation && cb.stopPropagation(), cb = $(cb.target.parentNode).index(), ta(cb)
      }

      function Aa(cb) {
        Pa.radios && ($('#' + fa + ' .ism-radios li').removeClass('active'), cb = $('#' + fa + ' .ism-radios li').get(cb), $(cb).addClass('active'), $(cb).find('input').attr('checked', 'checked'))
      }

      function Ba() {
        $('#' + fa + ' .ism-pause-button').off('click', Ca), $('#' + fa + ' .ism-pause-button').off('touchstart', Ca)
      }

      function Ca(cb) {
        cb.preventDefault(), cb.stopPropagation(), Xa ? sa() : pa()
      }

      function Da() {
        var cb = $('#' + fa).get(0),
          db = Qa.get(0);
        $a = new Dragdealer(cb, db, {
          steps: na(),
          x: 0,
          speed: .2,
          loose: !0,
          requestAnimationFrame: !0,
          dragStartCallback: function() {
            sa()
          },
          dragStopCallback: function() {
            new_slide_index = $a.getStep()[0] - 1, Pa.pause_button ? sa() : pa();
            var eb = new_slide_index,
              fb = Sa;
            Sa = eb, Fa('afterswipe', [eb]), Aa(eb), Ka(fb, eb, !1)
          },
          onAfterGlide: function() {
            $a.setStep(Sa + 1, 1, !0)
          }
        }), window.onload = function() {
          setTimeout(function() {
            $a.reflow()
          }, 150), setTimeout(function() {
            $a.reflow()
          }, 600)
        }
      }

      function Ea() {
        $a && ($a.setStep(Sa + 1, 1, !0), $a.reflow())
      }

      function Fa(cb, db) {
        bb[cb] && bb[cb].apply(this, db)
      }

      function Ga(cb, db) {
        if (1 == db || cb != Pa.transition_type) {
          Pa.transition_type = cb, $('#' + fa + ' .ism-slide').removeClass('ism-zoom-in'), $('#' + fa + ' .ism-slide').show();
          var eb = na();
          Qa.css('width', 100 * eb + '%'), Qa.find('.ism-slide').each(function(fb) {
            fb = Ra * fb + '%', this.css('width', 100 / eb + '%'), this.css('left', fb)
          })
        }
      }

      function Ha(cb, db) {
        if (qa(cb), !0 != Za && cb != Sa) {
          Za = !0;
          var eb = Sa;
          cb = parseInt(cb), 0 > cb ? cb = na() - 1 : cb >= na() && (cb = 0);
          var fb = cb;
          Aa(fb), Sa = fb, Fa('beforetransition', [fb]), 'instant' == Pa.transition_type ? (fb = cb, $a.setStep(fb + 1, 1, !0), Ka(eb, fb, !0, db)) : 'slide' == Pa.transition_type ? Ia(eb, cb, db) : 'fade' == Pa.transition_type ? Ja(eb, cb, !1, db) : 'zoom' == Pa.transition_type && Ja(eb, cb, !0, db)
        }
      }

      function Ia(cb, db, eb) {
        var fb = db / (na() - 1);
        $a.startSlide(fb, function() {
          Ka(cb, db, !0, eb)
        })
      }

      function Ja(cb, db, eb, fb) {
        $('#' + fa + ' li.ism-slide').removeClass('ism-zoom-in');
        var gb = $('#' + fa + ' li.ism-slide-' + cb),
          ob = Qa.clone();
        ob.addClass('ism-slides-clone');
        var pb = db / (na() - 1),
          pb = $a.getOffsetsByRatios([pb, 0]);
        ob.css('transform', 'translateX(' + pb[0] + 'px)'), ob.insertAfter(Qa.el), eb && gb.addClass('ism-zoom-in'), eb = ob.get(0), Qa.fadeInto(eb, 2 * Pa.transition_duration, function() {
          $a.setStep(db + 1, 1, !0), $('#' + fa + ' .ism-slides-clone').remove(), $('#' + fa + ' .ism-slides').show(), $('#' + fa + ' .ism-slides').css('opacity', null), Ka(cb, db, !0, fb)
        })
      }

      function Ka(cb, db, eb, fb) {
        db = parseInt(db), $('#' + fa + ' .ism-slides-clone').remove(), $('#' + fa + ' .ism-slides').show(), $('#' + fa + ' li.ism-slide').removeClass('ism-zoom-in'), eb && Ea(), fb && fb(), La(db), Na(db), Za = !1, Fa('aftertransition', [db])
      }

      function La(cb) {
        Ma(), 'none' != Pa.image_fx && ('zoompan' == Pa.image_fx ? $('#' + fa + ' .ism-slide-' + cb + ' .ism-img-frame').addClass('ism-zoom-pan') : 'zoomrotate' == Pa.image_fx && $('#' + fa + ' .ism-slide-' + cb + ' .ism-img-frame').addClass('ism-zoom-rotate'))
      }

      function Ma() {
        $('#' + fa + ' .ism-slide .ism-img-frame').removeClass('ism-zoom-pan'), $('#' + fa + ' .ism-slide .ism-img-frame').removeClass('ism-zoom-rotate')
      }

      function Na(cb) {
        Qa.find('.ism-caption').css('visibility', 'hidden'), Qa.find('.ism-caption').removeClass('ism-caption-anim'), Oa(cb, 0), Oa(cb, 1), Oa(cb, 2)
      }

      function Oa(cb, db) {
        Pa.captions[cb] && 1 == Pa.captions[cb][db].enable && setTimeout(function() {
          Qa.find('.ism-slide-' + cb + ' .ism-caption-' + db).css('visibility', 'visible'), Qa.find('.ism-slide-' + cb + ' .ism-caption-' + db).addClass('ism-caption-anim')
        }, Pa.captions[cb][db].delay)
      }
      var Pa, Qa, Ra, Sa, Ta, Ua, Va, Wa, Xa, Ya, Za, $a, _a = {
          transition_type: 'slide',
          play_type: 'manual',
          interval: 7E3,
          image_fx: 'none',
          buttons: !0,
          radios: !0,
          radio_type: 'button',
          pause_button: !0,
          transition_duration: 350,
          swipe: !0
        },
        ab = [{
          enable: !1,
          delay: 0
        }, {
          enable: !1,
          delay: 200
        }, {
          enable: !1,
          delay: 400
        }],
        bb = {};
      ha(ga, !1, ga.prevent_stop_loading || !1), this.init = ha, this.deinit = la, this.stopLoading = ja, this.transition = Ha, this.listen = function(cb, db) {
        bb[cb] = db
      }, this.reflow = Ea, this.setTransitionType = Ga, this.setPlayType = oa, this.setInterval = function(cb) {
        Pa.interval = cb
      }, this.setImageFx = function(cb) {
        cb == Pa.image_fx ? Pa.image_fx = cb : (Pa.image_fx = cb, La(Sa))
      }, this.setCaptionEnable = function(cb, db) {
        Pa.captions[cb][db].enable = 1
      }, this.setCaptionDelay = function(cb, db) {
        Pa.captions[cb][db].delay = 1
      }, this.enableButtons = function(cb) {
        !0 !== cb || Pa.buttons || (va(), $('#' + fa + ' .ism-button').remove(), ua())
      }, this.enableRadios = function() {}, this.setRadioType = function(cb) {
        'thumbnail' == cb ? $('#' + fa + ' .ism-radios').addClass('ism-radios-as-thumbnails') : $('#' + fa + ' .ism-radios').removeClass('ism-radios-as-thumbnails')
      }, this.getSlideCount = na, this.getActiveSlideIndex = function() {
        return Sa
      }, this.setElementId = function(cb) {
        fa = document.getElementById(fa).id = cb
      }
    }
    s.prototype.get = function(fa) {
      return this.nodes[fa]
    }, s.prototype.find = function(fa) {
      return fa = this.el.querySelectorAll(fa), new s(null, fa)
    }, s.prototype.index = function() {
      for (var fa = this.el, ga = 0; null != (fa = fa.previousSibling);) ga++;
      return ga
    }, s.prototype.each = function(fa) {
      for (var ga, ha = 0; ha < this.nodes.length; ha++) ga = new s(this.nodes[ha]), fa.call(ga, ha, ga)
    }, s.prototype.remove = function() {
      for (var fa, ga = 0; ga < this.nodes.length; ga++) fa = this.nodes[ga], fa.parentNode.removeChild(fa)
    }, s.prototype.removeAttr = function(fa) {
      for (var ga = 0; ga < this.nodes.length; ga++) this.nodes[ga].removeAttribute(fa)
    }, s.prototype.attr = function(fa, ga) {
      var ha = this.el;
      return void 0 == ga ? ha.getAttribute(fa) : void ha.setAttribute(fa, ga)
    }, s.prototype.data = function(fa) {
      return this.el.getAttribute('data-' + fa)
    }, s.prototype.hasClass = function(fa) {
      var ga = this.el;
      return ga.classList ? ga.classList.contains(fa) : new RegExp('(^| )' + fa + '( |$)', 'gi').test(ga.className)
    }, s.prototype.addClass = function(fa) {
      for (var ga, ha = 0; ha < this.nodes.length; ha++) ga = this.nodes[ha], ga.classList ? ga.classList.add(fa) : ga.className += ' ' + fa
    }, s.prototype.removeClass = function(fa) {
      for (var ga, ha = 0; ha < this.nodes.length; ha++) ga = this.nodes[ha], ga.classList ? ga.classList.remove(fa.split(' ')) : ga.className = ga.className.replace(new RegExp('(^|\\b)' + fa.split(' ').join('|') + '(\\b|$)', 'gi'), ' ')
    }, s.prototype.show = function() {
      for (var fa, ga = 0; ga < this.nodes.length; ga++) fa = this.nodes[ga], fa && fa.style && (fa.style.display = '')
    }, s.prototype.hide = function() {
      for (var fa, ga = 0; ga < this.nodes.length; ga++) fa = this.el, fa && fa.style && (fa.style.display = 'none')
    }, s.prototype.css = function(fa, ga) {
      for (var ha = 0; ha < this.nodes.length; ha++) this.nodes[ha].style[fa] = ga
    }, s.prototype.fadeOut = function(fa, ga) {
      s.crossFade(this.el, null, fa, ga)
    }, s.prototype.fadeIn = function(fa, ga) {
      s.crossFade(null, this.el, fa, ga)
    }, s.prototype.fadeInto = function(fa, ga, ha) {
      s.crossFade(this.el, fa, ga, ha)
    }, s.crossFade = function(fa, ga, ha, ia) {
      fa = fa || {
        style: {}
      }, ga = ga || {
        style: {}
      }, ha = ha || 400;
      var ja = 1,
        ka = 0;
      fa.style.opacity = ja, ga.style.opacity = ka, fa.style.filter = '', ga.style.filter = '';
      var la, ma = +new Date,
        na = function() {
          la = (new Date - ma) / ha, ja -= la, ka += la, fa.style.opacity = ja, ga.style.opacity = ka, fa.style.filter = 'alpha(opacity=' + 100 * ja | NaN, ga.style.filter = 'alpha(opacity=' + 100 * ka | NaN, ma = +new Date, 0 < ja ? window.requestAnimationFrame && requestAnimationFrame(na) || setTimeout(na, 16) : (fa.style.opacity = 0, ga.style.opacity = 1, fa.style.filter = '', ga.style.filter = '', ia && ia())
        };
      na()
    }, s.prototype.wrap = function(fa) {
      for (var ga = 0; ga < this.nodes.length; ga++) {
        var ha = this.nodes[ga],
          ia = new s(ha).index(),
          ja = ha.outerHTML,
          ka = ha.parentNode;
        ha.insertAdjacentHTML('beforebegin', fa), ka.removeChild(ha), ka.childNodes[ia].innerHTML = ja
      }
    }, s.prototype.wrapInner = function(fa) {
      var ga = this.el,
        ha = ga.innerHTML;
      ga.innerHTML = fa, ga.firstChild.innerHTML = ha
    }, s.prototype.unwrap = function() {
      var fa = this.el;
      fa.parentNode.outerHTML = fa.parentNode.innerHTML
    }, s.prototype.after = function(fa) {
      this.el.insertAdjacentHTML('afterend', fa)
    }, s.prototype.append = function(fa) {
      this.el.insertAdjacentHTML('beforeend', fa)
    }, s.prototype.insertAfter = function(fa) {
      fa.parentNode.insertBefore(this.el, fa.nextSibling)
    }, s.prototype.clone = function() {
      return new s(this.el.cloneNode(!0))
    }, s.prototype.on = function(fa, ga) {
      for (var ha, ia = 0; ia < this.nodes.length; ia++) ha = this.nodes[ia], ha.addEventListener ? ha.addEventListener(fa, ga) : ha.attachEvent('on' + fa, function() {
        ga.call(ha)
      })
    }, s.prototype.off = function(fa, ga) {
      for (var ha, ia = 0; ia < this.nodes.length; ia++) ha = this.nodes[ia], ha && (ha.removeEventListener ? ha.removeEventListener(fa, ga) : ha.detachEvent('on' + fa, ga))
    }, $.ready = function(fa) {
      'complete' === document.readyState ? setTimeout(fa, 1) : document.addEventListener ? document.addEventListener('DOMContentLoaded', fa, !1) : document.attachEvent('onreadystatechange', function() {
        'complete' === document.readyState && fa()
      })
    }, window.ISM = window.ISM || {}, window.ISM.Slider = _, window.ISM.Config = window.ISM.Config || {}, window.ISM.instances = [], $.ready(function() {
      if (!0 !== window.ISM.Config.no_instantiation)
        for (var fa, ga = $('.ism-slider'), ha = 0; ha < ga.length; ha++) fa = ga.get(ha), fa.id = fa.id || 'ism-slider-' + ha, window.ISM.instances.push(new _(fa.id, {}))
    })
  }(),
  function(s, $) {
    'function' == typeof define && define.amd ? define($) : s.Dragdealer = $()
  }(this, function() {
    function s(qa) {
      var ra = ['Webkit', 'Moz', 'ms', 'O'],
        sa = document.documentElement.style;
      if (void 0 !== sa[qa]) return qa;
      qa = qa.charAt(0).toUpperCase() + qa.substr(1);
      for (var ta = 0; ta < ra.length; ta++)
        if (void 0 !== sa[ra[ta] + qa]) return ra[ta] + qa
    }
    var $ = function(qa, ra, sa) {
      this.options = this.applyDefaults(sa || {}), this.bindMethods(), this.wrapper = qa, this.handle = ra, this.init(), this.bindEventListeners()
    };
    $.prototype = {
      defaults: {
        disabled: !1,
        horizontal: !0,
        vertical: !1,
        slide: !0,
        steps: 0,
        snap: !1,
        loose: !1,
        speed: .1,
        xPrecision: 0,
        yPrecision: 0,
        activeClass: 'active',
        css3: !0,
        tapping: !0,
        afterSwipeCallback: function() {}
      },
      init: function() {
        if (this.options.css3) {
          var qa = this.handle;
          la.backfaceVisibility && la.perspective && (qa.style[la.perspective] = '1000px', qa.style[la.backfaceVisibility] = 'hidden')
        }
        this.value = {
          prev: [-1, -1],
          current: [this.options.x || 0, this.options.y || 0],
          target: [this.options.x || 0, this.options.y || 0]
        }, this.offset = {
          wrapper: [0, 0],
          mouse: [0, 0],
          prev: [-999999, -999999],
          current: [0, 0],
          target: [0, 0]
        }, this.change = [0, 0], this.stepRatios = this.calculateStepRatios(), this.sliding = this.tapping = this.dragging = this.activity = !1, this.slide_count = 0, this.reflow(), this.options.disabled && this.disable()
      },
      applyDefaults: function(qa) {
        for (var ra in this.defaults) qa.hasOwnProperty(ra) || (qa[ra] = this.defaults[ra]);
        return qa
      },
      calculateStepRatios: function() {
        var qa = [];
        if (1 <= this.options.steps)
          for (var ra = 0; ra <= this.options.steps - 1; ra++) qa[ra] = 1 < this.options.steps ? ra / (this.options.steps - 1) : 0;
        return qa
      },
      setWrapperOffset: function() {
        this.offset.wrapper = ka.get(this.wrapper)
      },
      calculateBounds: function() {
        var qa = {
          top: this.options.top || 0,
          bottom: -(this.options.bottom || 0) + this.wrapper.offsetHeight,
          left: this.options.left || 0,
          right: -(this.options.right || 0) + this.wrapper.offsetWidth
        };
        return qa.availWidth = qa.right - qa.left - this.handle.offsetWidth, qa.availHeight = qa.bottom - qa.top - this.handle.offsetHeight, qa
      },
      calculateValuePrecision: function() {
        var qa = this.options.xPrecision || Math.abs(this.bounds.availWidth),
          ra = this.options.yPrecision || Math.abs(this.bounds.availHeight);
        return [qa ? 1 / qa : 0, ra ? 1 / ra : 0]
      },
      bindMethods: function() {
        this.requestAnimationFrame = 'function' == typeof this.options.customRequestAnimationFrame ? _(this.options.customRequestAnimationFrame, window) : _(na, window), this.cancelAnimationFrame = 'function' == typeof this.options.customCancelAnimationFrame ? _(this.options.customCancelAnimationFrame, window) : _(oa, window), this.animateWithRequestAnimationFrame = _(this.animateWithRequestAnimationFrame, this), this.animate = _(this.animate, this), this.onHandleMouseDown = _(this.onHandleMouseDown, this), this.onHandleTouchStart = _(this.onHandleTouchStart, this), this.onDocumentMouseMove = _(this.onDocumentMouseMove, this), this.onWrapperTouchMove = _(this.onWrapperTouchMove, this), this.onWrapperMouseDown = _(this.onWrapperMouseDown, this), this.onWrapperTouchStart = _(this.onWrapperTouchStart, this), this.onDocumentMouseUp = _(this.onDocumentMouseUp, this), this.onDocumentTouchEnd = _(this.onDocumentTouchEnd, this), this.onHandleClick = _(this.onHandleClick, this), this.onWindowResize = _(this.onWindowResize, this)
      },
      bindEventListeners: function() {
        fa(this.handle, 'mousedown', this.onHandleMouseDown), fa(this.handle, 'touchstart', this.onHandleTouchStart), fa(document, 'mousemove', this.onDocumentMouseMove), fa(this.wrapper, 'touchmove', this.onWrapperTouchMove), fa(this.wrapper, 'mousedown', this.onWrapperMouseDown), fa(this.wrapper, 'touchstart', this.onWrapperTouchStart), fa(document, 'mouseup', this.onDocumentMouseUp), fa(document, 'touchend', this.onDocumentTouchEnd), fa(this.handle, 'click', this.onHandleClick), fa(window, 'resize', this.onWindowResize), this.animate(!1, !0), this.interval = this.requestAnimationFrame(this.animateWithRequestAnimationFrame)
      },
      unbindEventListeners: function() {
        ga(this.handle, 'mousedown', this.onHandleMouseDown), ga(this.handle, 'touchstart', this.onHandleTouchStart), ga(document, 'mousemove', this.onDocumentMouseMove), ga(this.wrapper, 'touchmove', this.onWrapperTouchMove), ga(this.wrapper, 'mousedown', this.onWrapperMouseDown), ga(this.wrapper, 'touchstart', this.onWrapperTouchStart), ga(document, 'mouseup', this.onDocumentMouseUp), ga(document, 'touchend', this.onDocumentTouchEnd), ga(this.handle, 'click', this.onHandleClick), ga(window, 'resize', this.onWindowResize), this.cancelAnimationFrame(this.interval)
      },
      onHandleMouseDown: function(qa) {
        qa.target && 'A' == qa.target.tagName && 0 <= qa.target.className.search(/ism-caption/) && (document.location = qa.target.href), ja.refresh(qa), ha(qa), ia(qa), this.activity = !1, this.startDrag()
      },
      onHandleTouchStart: function(qa) {
        qa.target && 'A' == qa.target.tagName && 0 <= qa.target.className.search(/ism-caption/) && (document.location = qa.target.href), ja.refresh(qa), ia(qa), this.activity = !1, this.startDrag()
      },
      onDocumentMouseMove: function(qa) {
        ja.refresh(qa), this.dragging && (this.activity = !0, ha(qa))
      },
      onWrapperTouchMove: function(qa) {
        ja.refresh(qa), !this.activity && this.draggingOnDisabledAxis() ? this.dragging && this.stopDrag() : (ha(qa), this.activity = !0)
      },
      onWrapperMouseDown: function(qa) {
        qa.target && 0 <= qa.target.className.search(/ism-(button|radio|caption)/) || (ja.refresh(qa), ha(qa), this.startTap())
      },
      onWrapperTouchStart: function(qa) {
        ja.refresh(qa), ha(qa), this.startTap()
      },
      onDocumentMouseUp: function(qa) {
        this.stopDrag(), this.stopTap(), qa.target && 0 <= qa.target.className.search(/ism-(button|radio|caption)/) || this.options.afterSwipeCallback()
      },
      onDocumentTouchEnd: function() {
        this.stopDrag(), this.stopTap(), this.options.afterSwipeCallback()
      },
      onHandleClick: function(qa) {
        qa.target && 0 <= qa.target.className.search(/ism-(button|radio)/) || !this.activity || (ha(qa), ia(qa))
      },
      onWindowResize: function() {
        this.reflow()
      },
      enable: function() {
        this.disabled = !1, this.handle.className = this.handle.className.replace(/\s?disabled/g, '')
      },
      disable: function() {
        this.disabled = !0, this.handle.className += ' disabled'
      },
      reflow: function() {
        this.setWrapperOffset(), this.bounds = this.calculateBounds(), this.valuePrecision = this.calculateValuePrecision(), this.updateOffsetFromValue()
      },
      getStep: function() {
        return [this.getStepNumber(this.value.target[0]), this.getStepNumber(this.value.target[1])]
      },
      getValue: function() {
        return this.value.target
      },
      setStep: function(qa, ra, sa) {
        this.setValue(this.options.steps && 1 < qa ? (qa - 1) / (this.options.steps - 1) : 0, this.options.steps && 1 < ra ? (ra - 1) / (this.options.steps - 1) : 0, sa)
      },
      setValue: function(qa, ra, sa) {
        this.setTargetValue([qa, ra || 0]), sa && (this.groupCopy(this.value.current, this.value.target), this.updateOffsetFromValue(), this.callAnimationCallback())
      },
      startTap: function() {
        !this.disabled && this.options.tapping && (this.tapping = !0, this.setWrapperOffset(), this.setTargetValueByOffset([ja.x - this.offset.wrapper[0] - this.handle.offsetWidth / 2, ja.y - this.offset.wrapper[1] - this.handle.offsetHeight / 2]))
      },
      stopTap: function() {
        !this.disabled && this.tapping && (this.tapping = !1, this.setTargetValue(this.value.current))
      },
      startDrag: function() {
        this.disabled || (this.dragging = !0, this.interval = this.requestAnimationFrame(this.animateWithRequestAnimationFrame), this.setWrapperOffset(), this.offset.mouse = [ja.x - ka.get(this.handle)[0], ja.y - ka.get(this.handle)[1]], this.wrapper.className.match(this.options.activeClass) || (this.wrapper.className += ' ' + this.options.activeClass), this.callDragStartCallback())
      },
      stopDrag: function() {
        if (!this.disabled && this.dragging) {
          this.dragging = !1;
          var qa = this.groupClone(this.value.current);
          if (this.options.slide) {
            var ra = this.change;
            qa[0] += 4 * ra[0], qa[1] += 4 * ra[1]
          }
          this.setTargetValue(qa), this.wrapper.className = this.wrapper.className.replace(' ' + this.options.activeClass, ''), this.callDragStopCallback()
        }
      },
      callAnimationCallback: function() {
        var qa = this.value.current;
        this.options.snap && 1 < this.options.steps && (qa = this.getClosestSteps(qa)), this.groupCompare(qa, this.value.prev) || ('function' == typeof this.options.animationCallback && this.options.animationCallback.call(this, qa[0], qa[1]), this.groupCopy(this.value.prev, qa))
      },
      callTargetCallback: function() {
        'function' == typeof this.options.callback && this.options.callback.call(this, this.value.target[0], this.value.target[1])
      },
      callDragStartCallback: function() {
        'function' == typeof this.options.dragStartCallback && this.options.dragStartCallback.call(this, this.value.target[0], this.value.target[1])
      },
      callDragStopCallback: function() {
        'function' == typeof this.options.dragStopCallback && this.options.dragStopCallback.call(this, this.value.target[0], this.value.target[1])
      },
      startSlide: function(qa, ra) {
        this.slide_callback = ra, this.sliding = !0, this.value.target[0] = qa, this.slide_start = this.value.current[0], this.step_size = Math.abs(this.value.target[0] - this.value.current[0]), this.interval = this.requestAnimationFrame(this.animateWithRequestAnimationFrame)
      },
      animateWithRequestAnimationFrame: function(qa) {
        qa ? (this.timeOffset = this.timeStamp ? qa - this.timeStamp : 0, this.timeStamp = qa) : this.timeOffset = 25, this.sliding ? this.animateSlide() : this.animate(), this.sliding || this.dragging || this.value.target[0] != this.value.current[0] ? this.interval = this.requestAnimationFrame(this.animateWithRequestAnimationFrame) : this.options.onAfterGlide()
      },
      animate: function(qa, ra) {
        if (!qa || this.dragging) {
          if (this.dragging) {
            var sa = this.groupClone(this.value.target);
            this.setTargetValueByOffset([ja.x - this.offset.wrapper[0] - this.offset.mouse[0], ja.y - this.offset.wrapper[1] - this.offset.mouse[1]], this.options.loose), this.change = [this.value.target[0] - sa[0], this.value.target[1] - sa[1]]
          }(this.dragging || ra) && this.groupCopy(this.value.current, this.value.target), (this.dragging || this.glide() || ra) && (this.updateOffsetFromValue(), this.callAnimationCallback())
        }
      },
      glide: function() {
        var qa = [this.value.target[0] - this.value.current[0], this.value.target[1] - this.value.current[1]];
        return (qa[0] || qa[1]) && (Math.abs(qa[0]) > this.valuePrecision[0] || Math.abs(qa[1]) > this.valuePrecision[1] ? (this.value.current[0] += qa[0] * Math.min(this.options.speed * this.timeOffset / 25, 1), this.value.current[1] += qa[1] * Math.min(this.options.speed * this.timeOffset / 25, 1)) : this.groupCopy(this.value.current, this.value.target), !0)
      },
      animateSlide: function() {
        for (var qa = this.value.target[0] - this.value.current[0], ra = 0 <= qa ? 1 : -1, qa = Math.abs(qa), sa = (this.value.current[0] - this.slide_start) / (this.value.target[0] - this.slide_start), ta = sa - .5, ta = .08 * ((-3 * ta * ta + .8) * this.step_size); ta > qa;) ta *= .5;
        .995 < sa ? (this.groupCopy(this.value.current, this.value.target), this.sliding = !1, this.slide_callback()) : this.value.current[0] += ra * ta, this.updateOffsetFromValue(), this.renderHandlePosition(), isNaN(sa)
      },
      updateOffsetFromValue: function() {
        this.offset.current = this.options.snap ? this.getOffsetsByRatios(this.getClosestSteps(this.value.current)) : this.getOffsetsByRatios(this.value.current), this.groupCompare(this.offset.current, this.offset.prev) || (this.renderHandlePosition(), this.groupCopy(this.offset.prev, this.offset.current))
      },
      renderHandlePosition: function() {
        var qa = '';
        this.options.css3 && la.transform ? (this.options.horizontal && (qa += 'translateX(' + this.offset.current[0] + 'px)'), this.handle.style[la.transform] = qa) : this.options.horizontal && (this.handle.style.left = this.offset.current[0] + 'px')
      },
      setTargetValue: function(qa, ra) {
        var sa = ra ? this.getLooseValue(qa) : this.getProperValue(qa);
        this.groupCopy(this.value.target, sa), this.offset.target = this.getOffsetsByRatios(sa), this.callTargetCallback()
      },
      setTargetValueByOffset: function(qa, ra) {
        var sa = this.getRatiosByOffsets(qa),
          sa = ra ? this.getLooseValue(sa) : this.getProperValue(sa);
        this.groupCopy(this.value.target, sa), this.offset.target = this.getOffsetsByRatios(sa)
      },
      getLooseValue: function(qa) {
        var ra = this.getProperValue(qa);
        return [ra[0] + (qa[0] - ra[0]) / 4, ra[1] + (qa[1] - ra[1]) / 4]
      },
      getProperValue: function(qa) {
        return qa = this.groupClone(qa), qa[0] = Math.max(qa[0], 0), qa[1] = Math.max(qa[1], 0), qa[0] = Math.min(qa[0], 1), qa[1] = Math.min(qa[1], 1), (!this.dragging && !this.tapping || this.options.snap) && 1 < this.options.steps && (qa = this.getClosestSteps(qa)), qa
      },
      getRatiosByOffsets: function(qa) {
        return [this.getRatioByOffset(qa[0], this.bounds.availWidth, this.bounds.left), this.getRatioByOffset(qa[1], this.bounds.availHeight, this.bounds.top)]
      },
      getRatioByOffset: function(qa, ra, sa) {
        return ra ? (qa - sa) / ra : 0
      },
      getOffsetsByRatios: function(qa) {
        return [this.getOffsetByRatio(qa[0], this.bounds.availWidth, this.bounds.left), this.getOffsetByRatio(qa[1], this.bounds.availHeight, this.bounds.top)]
      },
      getOffsetByRatio: function(qa, ra, sa) {
        return Math.round(qa * ra) + sa
      },
      getStepNumber: function(qa) {
        return this.getClosestStep(qa) * (this.options.steps - 1) + 1
      },
      getClosestSteps: function(qa) {
        return [this.getClosestStep(qa[0]), this.getClosestStep(qa[1])]
      },
      getClosestStep: function(qa) {
        for (var ra = 0, sa = 1, ta = 0; ta <= this.options.steps - 1; ta++) Math.abs(this.stepRatios[ta] - qa) < sa && (sa = Math.abs(this.stepRatios[ta] - qa), ra = ta);
        return this.stepRatios[ra]
      },
      groupCompare: function(qa, ra) {
        return qa[0] == ra[0] && qa[1] == ra[1]
      },
      groupCopy: function(qa, ra) {
        qa[0] = ra[0], qa[1] = ra[1]
      },
      groupClone: function(qa) {
        return [qa[0], qa[1]]
      },
      draggingOnDisabledAxis: function() {
        return !this.options.horizontal && ja.xDiff > ja.yDiff || !this.options.vertical && ja.yDiff > ja.xDiff
      }
    };
    for (var _ = function(qa, ra) {
        return function() {
          return qa.apply(ra, arguments)
        }
      }, fa = function(qa, ra, sa) {
        qa.addEventListener ? qa.addEventListener(ra, sa, !1) : qa.attachEvent && qa.attachEvent('on' + ra, sa)
      }, ga = function(qa, ra, sa) {
        qa.removeEventListener ? qa.removeEventListener(ra, sa, !1) : qa.detachEvent && qa.detachEvent('on' + ra, sa)
      }, ha = function(qa) {
        qa || (qa = window.event), qa.preventDefault && qa.preventDefault(), qa.returnValue = !1
      }, ia = function(qa) {
        qa || (qa = window.event), qa.stopPropagation && qa.stopPropagation(), qa.cancelBubble = !0
      }, ja = {
        x: 0,
        y: 0,
        xDiff: 0,
        yDiff: 0,
        refresh: function(qa) {
          qa || (qa = window.event), 'mousemove' == qa.type ? this.set(qa) : qa.touches && this.set(qa.touches[0])
        },
        set: function(qa) {
          var ra = this.x,
            sa = this.y;
          qa.clientX || qa.clientY ? (this.x = qa.clientX, this.y = qa.clientY) : (qa.pageX || qa.pageY) && (this.x = qa.pageX - document.body.scrollLeft - document.documentElement.scrollLeft, this.y = qa.pageY - document.body.scrollTop - document.documentElement.scrollTop), this.xDiff = Math.abs(this.x - ra), this.yDiff = Math.abs(this.y - sa)
        }
      }, ka = {
        get: function(qa) {
          var ra = {
            left: 0,
            top: 0
          };
          return void 0 !== qa.getBoundingClientRect && (ra = qa.getBoundingClientRect()), [ra.left, ra.top]
        }
      }, la = {
        transform: s('transform'),
        perspective: s('perspective'),
        backfaceVisibility: s('backfaceVisibility')
      }, ma = ['webkit', 'moz'], na = window.requestAnimationFrame, oa = window.cancelAnimationFrame, pa = 0; pa < ma.length && !na; ++pa) na = window[ma[pa] + 'RequestAnimationFrame'], oa = window[ma[pa] + 'CancelAnimationFrame'] || window[ma[pa] + 'CancelRequestAnimationFrame'];
    return na || (na = function(qa) {
      return setTimeout(qa, 25)
    }, oa = clearTimeout), $
  });
