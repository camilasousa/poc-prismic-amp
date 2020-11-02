import React from 'react';
import { array, shape } from 'prop-types';
import { RichText } from 'prismic-reactjs';

const section = {
  maxWidth: '600px',
  margin: '4em auto',
  textAlign: 'center',
};

const h2 = {
  color: '#8592e0',
};

const LeadAmpform = ({ slice }) => (
  <section style={section} id="inscrever">
     <div>
        <div>
        {
          slice.primary.title ?
          <RichText render={slice.primary.title}/>
          : <h3 style={h2}>Template slice, update me!</h3>
        }
        {
          slice.primary.description ?
          <RichText render={slice.primary.description}/>
          : <p>start by editing this slice from inside the SliceMachine builder!</p>
        }
        </div>
        <div>
          <form method="POST"
            action-xhr="https://beta.eduk.com.br/api/v1/leads?format=amp"
            data-form-title="Mobirise Form"
            id="subscribeForm"
            encType="application/x-www-form-urlencoded"
            on="
            submit:AMP.setState({
              form: { disable: true }
            });
            submit-success:AMP.navigateTo(url=&#39;sucesso.html&#39;);
            submit-error:AMP.setState({
              form: {
                disable: false,
                email: { state: form.email.value },
                phone: { state: form.phone.value }
              }
            })
          " noValidate="">
               <amp-state id="form" i-amphtml-layout="container" hidden="" aria-hidden="true">
                <script
                  type="application/json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                      "email": {
                        "state": "",
                        "value": ""
                      },
                      "phone": {
                        "state": "",
                        "value": ""
                      }
                    }),
                  }}
                ></script>
              </amp-state>
              <input type="hidden" name="captured_url" value="SOURCE_URL" data-amp-replace="SOURCE_URL" />
              <input type="hidden" name="product" value="chocolate" />
              <input type="hidden" name="utm_campaign" value="QUERY_PARAM(utm_campaign)" data-amp-replace="QUERY_PARAM" />
              <input type="hidden" name="utm_content" value="QUERY_PARAM(utm_content)" data-amp-replace="QUERY_PARAM" />
              <input type="hidden" name="utm_medium" value="QUERY_PARAM(utm_medium)" data-amp-replace="QUERY_PARAM" />
              <input type="hidden" name="utm_source" value="QUERY_PARAM(utm_source)" data-amp-replace="QUERY_PARAM" />
              <input type="hidden" name="utm_term" value="QUERY_PARAM(utm_term)" data-amp-replace="QUERY_PARAM" />

              <div submit-error="">
                <template data-form-alert="" type="amp-mustache">Erro</template>
              </div>

              <input
                on="change:AMP.setState({form:{email:{value: event.value}}})"
                type="email"
                name="email"
                placeholder="E-mail"
                data-form-field="Email"
                data-amp-bind-value="form.email.state"
                required="required"
                value=""
                id="form[data][0][1]-inscrever" />

              <input
                on="change:AMP.setState({form:{phone:{value: event.value}}})"
                type="tel"
                name="phone"
                placeholder="Telefone com DDD"
                data-form-field="Phone"
                data-amp-bind-value="form.phone.state"
                required="required"
                value=""
                id="form[data][1][1]-inscrever"
              />

              <div>
                <button type="submit">Quero me inscrever</button>
              </div>
            </form>
        </div>
    </div>
  </section>
);

LeadAmpform.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default LeadAmpform;
