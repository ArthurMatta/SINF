<template>
	<div class="sinf-opportunities">
		<div class="form-elements">
			<div class="row">
				<div class="col-md-8">
					<vuestic-widget :headerText="'Add Client' | translate">
						<form>

							<div class="row justify-content-center">
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
									</div>
							<div class="row justify-content-center">
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
								</div>

							<div class="row justify-content-center">
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
										<div class="row justify-content-center">
											<div class="col-md-4">
												<fieldset>
													<div class="form-group">
														<div class="input-group">
															<input id="simple-input" required/>
															<label class="control-label" for="simple-input">{{'Country'
																| translate}}</label><i class="bar"></i>
															</div>
														</div>
													</fieldset>
												</div>
												</div>

										<div class="row justify-content-center">

											<div class="col-md-4">
											<div class="d-flex justify-content-center">
												<button class="btn btn-primary">
													{{'Submit' | translate}}
												</button>
												</div>
											</div>
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
