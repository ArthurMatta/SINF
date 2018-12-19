<template>
	<div class="sinf-opportunities">
		<div class="form-elements">
			<div class="row">
				<div class="col-md-12">
					<vuestic-widget :headerText="'forms.inputs.title' | translate">
						<form>

							<div class="row">
								<div class="col-md-4">
									<fieldset>
										<div class="form-group">
											<div class="input-group">
												<input id="simple-input" required/>
												<label class="control-label" for="simple-input">{{'ID'
													| translate}}</label><i class="bar"></i>
												</div>
											</div>
										</fieldset>
									</div>
									<div class="col-md-4">
										<fieldset>
											<div class="form-group">
												<div class="input-group">
													<input id="simple-input" required/>
													<label class="control-label" for="simple-input">{{'Name'
														| translate}}</label><i class="bar"></i>
													</div>
												</div>
											</fieldset>
										</div>
										<div class="col-md-4">
											<fieldset>
												<div class="form-group">
													<div class="input-group">
														<input id="simple-input" required/>
														<label class="control-label" for="simple-input">{{'Adress'
															| translate}}</label><i class="bar"></i>
														</div>
													</div>
												</fieldset>
											</div>
										</div>
										<div class="row">
											<div class="col-md-4">
												<fieldset>
													<div class="form-group">
														<div class="input-group">
															<input id="simple-input" required/>
															<label class="control-label" for="simple-input">{{'Phone'
																| translate}}</label><i class="bar"></i>
															</div>
														</div>
													</fieldset>
												</div>

											<div class="col-md-4">
												<fieldset>
													<vuestic-simple-select
													:label="'Select Salesman' | translate"
													v-model="simpleSelectModel"
													option-key="description"
													v-bind:options="simpleOptions"
													/>
												</fieldset>
												</div>
											</div>

											<div class="d-flex justify-content-center">
												<button class="btn btn-primary">
													{{'buttons.button' | translate}}
												</button>
											</div>
										</form>
									</vuestic-widget>
								</div>
							</div>
						</div>
					</div>
				</template>

				<script>
					import GoogleMapsPage from '../maps/google-maps/GoogleMapsPage'
					import GoogleMap from '../maps/google-maps/GoogleMap'

					export default {
						components:{
							GoogleMapsPage,
							GoogleMap
						},
						data () {
							return {
								simpleOptions: [
								{
									id: 1,
									description: 'First option',
								},
								{
									id: 2,
									description: 'Second option',
								},
								{
									id: 3,
									description: 'Third option',
								},
								],
								simpleSelectModel: ''
							}
						}
					}
				</script>

				<style scoped>

				</style>
